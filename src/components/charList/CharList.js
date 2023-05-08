import { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';

import './charList.scss';

class CharList extends Component {
    // Инициализация начального состояния state, в котором определяется объект char с пустыми свойствами.
    state = {
        charList : [],
        loading: true,
        newItemLoading: false,
        error: false,
        offset: 210,
        charEnded: false
    }

    marvelService = new MarvelService();

    // Это метод жизненного цикла componentDidMount, который вызывается после того, как компонент был добавлен в DOM.
    // Внутри метода вызывается метод getAllCharacters объекта marvelService для получения списка персонажей из внешнего сервиса.
    // Если запрос успешен, вызывается метод onCharListLoaded с полученными данными.
    // Если запрос завершается ошибкой, вызывается метод onError для обработки ошибки.
    // componentDidMount() {
    //     this.marvelService.getAllCharacters()
    //         .then(this.onCharListLoaded)
    //         .catch(this.onError)
    // }

    componentDidMount() {
        this.onRequest();
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        // если данные еще загружаются, то ничего не делаем.
        if (this.state.newItemLoading) return;
        //  если все данные уже загружены, то удаляем обработчик события прокрутки
        if (this.state.charEnded)
            window.removeEventListener("scroll", this.onScroll);

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // загружаем следующую порцию данных с помощью метода onRequest(), передавая в качестве параметра текущее значение смещения offset.
            this.onRequest(this.state.offset);
        }
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    // Определение метода onCharListLoaded, который будет вызываться после успешной загрузки данных о персонаже и обновлять состояние компонента.
    // Как только данный загружаются, loading принимает false
    onCharListLoaded = (newCharList) => {

        let ended = false;
        if (newCharList.lenght < 9) {
            ended = true;
        }

        this.setState(({offset, charList}) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended
        }))
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    itemRefs = [];
    setRef = (ref) => {
        this.itemRefs.push(ref)
    }

    focusOnItem = (id) => {
        this.itemRefs.forEach(item => item.classList.remove('char__item_selected'));
        this.itemRefs[id].classList.add('char__item_selected');
        this.itemRefs[id].focus();
    }

    // Этот метод создан для оптимизации, 
    // чтобы не помещать такую конструкцию в метод render
    renderItems(arr) {
        const items =  arr.map((item, i) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            
            return (
                <li className="char__item" 
                    key={item.id}
                    tabIndex={0}
                    ref={this.setRef}
                    onClick={() => {
                        this.props.onCharSelected(item.id);
                        this.focusOnItem(i);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            this.props.onCharSelected(item.id);
                            this.focusOnItem(i);
                        }
                    }}>
                        <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                        <div className="char__name">{item.name}</div>
                </li>
            )
        });
        // А эта конструкция вынесена для центровки спиннера/ошибки
        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    render() {
        const {charList, loading, error, offset, newItemLoading, charEnded} = this.state;

        const items = this.renderItems(charList)

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button 
                    className="button button__main button__long"
                    disabled={newItemLoading}
                    style={{'display': charEnded ? 'none' : 'block'}}
                    onClick={() => this.onRequest(offset)} >
                        <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}
    
CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;