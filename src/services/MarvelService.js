import { useHttp } from "../hooks/http.hook"

const useMarvelService = () => {
  const _apiBase = 'https://gateway.marvel.com:443/v1/public/'
  const _apiKey = 'apikey=a0f9da6f3566975843b5fae062c40f08'
  const _baseOffset = 210

  const {loading, request, error, clearError} = useHttp()

  // Здесь мы объявляем метод _transformCharacter, который преобразует объект персонажа, полученного из API Marvel, в объект с более удобными именами свойств.
  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no data on this character',
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items
    }
  }

  // Здесь мы объявляем метод getAllCharacters, который делает запрос к API Marvel для получения списка всех персонажей в формате JSON.
  // Метод возвращает массив персонажей в виде объектов, преобразованных методом _transformCharacter(), который будет вызван для каждого элемента массива.
  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`)
    return res.data.results.map(_transformCharacter)
  }

  // Здесь мы объявляем метод getCharacter, который делает запрос к API Marvel для получения информации о персонаже с заданным идентификатором в формате JSON.
  // Метод возвращает объект с информацией о персонаже, преобразованный методом _transformCharacter().
  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`)
    return _transformCharacter(res.data.results[0]);
  }

  const _transformComics = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      description: comics.description || "There is no description",
      pageCount: comics.pageCount
        ? `${comics.pageCount} p.`
        : "No information about the number of pages",
      thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
      language: comics.textObjects[0]?.language || "en-us",
      price: comics.prices[0].price
        ? `${comics.prices[0].price}$`
        : "not available",
    }
  }

  const getAllComics = async (offset = 0) => {
    const res = await request(`${_apiBase}comics?orderBy=issueNumber&limit=8&offset=${offset}&${_apiKey}`)
    return res.data.results.map(_transformComics)
  }

  const getComic = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`)
    return _transformComics(res.data.results[0])
  }

  return { loading, error, clearError, getAllCharacters, getCharacter, getAllComics, getComic }
}

export default useMarvelService;