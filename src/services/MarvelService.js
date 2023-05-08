class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=a0f9da6f3566975843b5fae062c40f08';
    _baseOffset = 210;

    // Метод getResource использует async/await для асинхронного выполнения запроса fetch к указанному url-адресу. 
    // В случае, если ответ от сервера не был успешным, метод выбрасывает исключение с сообщением об ошибке. 
    // В противном случае, метод возвращает ответ в формате JSON, полученный с помощью вызова метода json().
    getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    // Здесь мы объявляем метод _transformCharacter, который преобразует объект персонажа, полученного из API Marvel, в объект с более удобными именами свойств.
    _transformCharacter = (char) => {
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
    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    // Здесь мы объявляем метод getCharacter, который делает запрос к API Marvel для получения информации о персонаже с заданным идентификатором в формате JSON. 
    // Метод возвращает объект с информацией о персонаже, преобразованный методом _transformCharacter().
    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    } 
}

export default MarvelService;