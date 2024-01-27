export function reload(arr, place, genre) {
    place.innerHTML = ''
    for (let item of arr) {
        let idx = arr.sort().indexOf(item) + 1
        let list = document.createElement('li')
        let deleteDiv = document.createElement('div')

        list.classList.add('promo__interactive-item')
        deleteDiv.classList.add('delete')

        if (genre === 'All') {
            place.append(list)
        } else if (genre === item.Genre) {
            place.append(list)
        }
        
        let lists = document.querySelectorAll('.promo__interactive-item')
        
        let listIdx = 0

        lists.forEach((list, idx) => {
            listIdx = idx
        })

        list.append(listIdx + 1 + '. ' + item.Title)

        list.append(deleteDiv)

        list.onclick = () => {
            console.log('asdd');
            let bg = document.querySelector('.promo__bg')
            let janre = document.querySelector('.promo__genre')
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
            reload(arr, place, genre)
        }
    }
}


// export function GenresUpdate(arr, place) {
//     for (let item of arr) {
//         let li = document.createElement('li')
//         let a = document.createElement('a')

//         a.classList.add('promo__menu-item')
//         a.href = '#'

//         place.append(li)
//         li.append(a)
//         a.append(item)
//     }

//     let AGenres = document.querySelectorAll('.promo__menu-item')

//     let prev = 0
//     AGenres.forEach((item, idx) => {
//         AGenres[prev].classList.add('promo__menu-item_active')
//         item.onclick = () => {
//             AGenres[prev].classList.remove('promo__menu-item_active')
//             item.classList.add('promo__menu-item_active')
//             reload(arr, place, genre)
//             prev = idx
//         }
//     })
// }