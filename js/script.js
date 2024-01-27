/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// 'use strict';

import { movies } from "./db.js";
import { reload } from "./ui.js";

// let sorted = movieDB.movies.sort()

let addChilds = document.querySelectorAll('.promo__adv div, img')
let janre = document.querySelector('.promo__genre')

addChilds.forEach(item => item.remove())

janre.innerHTML = 'драма'

let bg = document.querySelector('.promo__bg')

bg.style.background = `url("./img/bg.jpg") no-repeat center / cover`

let listBox = document.querySelector('.promo__interactive-list')

let genres = ['All', ...new Set(movies.map(item => item.Genre))]

let ulGenres = document.querySelector('.ul-genres')


function GenresUpdate(arr, place) {
    for (let item of arr) {
        let li = document.createElement('li')
        let a = document.createElement('a')

        a.classList.add('promo__menu-item')
        a.href = '#'

        place.append(li)
        li.append(a)
        a.append(item)
    }

    let AGenres = document.querySelectorAll('.promo__menu-item')

    let prev = 0
    AGenres.forEach((item, idx) => {
        AGenres[prev].classList.add('promo__menu-item_active')
        item.onclick = () => {
            AGenres[prev].classList.remove('promo__menu-item_active')
            item.classList.add('promo__menu-item_active')
            reload(movies, listBox, item.innerText)
            prev = idx
        }
    })
}

GenresUpdate(genres, ulGenres)

reload(movies, listBox, 'All')