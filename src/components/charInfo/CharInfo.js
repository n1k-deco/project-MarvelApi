import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/ErrorMessage'
import Skeleton from '../skeleton/Skeleton'
import useMarvelService from '../../services/MarvelService'

import './charInfo.scss'

const CharInfo = (props) => {
  const [char, setChar] = useState(null)

  const {loading, error, clearError, getCharacter} = useMarvelService()

  useEffect(() => {
    updateChar()
  }, [props.charId])

  const updateChar = () => {
    const {charId} = props
    if (!charId) {
      return
    }

    clearError()
    getCharacter(charId)
      .then(onCharLoaded)
  }

  const onCharLoaded = (char) => {
    setChar(char)
  }

  const skeleton = char || loading || error ?  null : <Skeleton />
  const errorMessage = error ? <ErrorMessage /> : null
  const spinner = loading ? <Spinner /> : null
  const content = !(loading || error || !char) ? <Viev char={char} /> : null

  return (
    <div className="char__info">
      {skeleton}
      {errorMessage}
      {spinner}
      {content}
    </div>
  )
}

const Viev = ({char}) => {
  const {name, description, thumbnail, homepage, wiki, comics} = char

  let imgStyle = {'objectFit' : 'cover'}
  if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
    imgStyle = {'objectFit' : 'contain'}
  }

  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt={name} style={imgStyle}/>
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">
        {description}
      </div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics.lenght > 0 ? null : 'There is no comics with this character'}
        {
          comics.map((item, i) => {
            let comicsFromCharInfo = item.resourceURI.replace(/\D/g, '').slice(1);
            if (i > 9) return
            return (
              <li key={i} className="char__comics-item">
                <Link to = {`/comics/${comicsFromCharInfo}`}>
                  {item.name}
                </Link>
              </li>
            )
          })
        }

      </ul>
    </>
  )
}

CharInfo.propTypes = {
  charId: PropTypes.number
}

export default CharInfo