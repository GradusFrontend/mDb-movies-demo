export function reload(arr, place) {
    place.innerHTML = ''
    for (let item of arr) {
        let idx = arr.sort().indexOf(item) + 1
        let list = document.createElement('li')
        let deleteDiv = document.createElement('div')

        list.classList.add('promo__interactive-item')
        deleteDiv.classList.add('delete')

        place.append(list)
        list.append(idx + '. ' + item.Title)
        list.append(deleteDiv)

        list.onclick = () => {
            let title = document.querySelector('.promo__title')
            let imdb = document.querySelector('.imdb')
            let kinopoisk = document.querySelector('.kinopoisk')
            let descr = document.querySelector('.promo__descr')
            bg.style.background = `url(${item.Poster}) no-repeat center / cover`
            janre.innerHTML = item.Genre
            title.innerHTML = item.Title
            descr.innerHTML = item.Plot
            imdb.innerHTML = 'IMDb: ' + item.imdbRating
            kinopoisk.innerHTML = 'Кинопоиск: ' + item.Metascore
        }

        deleteDiv.onclick = () => {
            arr.splice(idx - 1, 1)
            reload(arr, place)
        }
    }
}

// export function setGenre()