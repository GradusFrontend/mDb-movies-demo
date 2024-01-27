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

console.log(addChilds);
addChilds.forEach(item => item.remove())

janre.innerHTML = 'драма'

let bg = document.querySelector('.promo__bg')

bg.style.background = `url("./img/bg.jpg") no-repeat center / cover`

let listBox = document.querySelector('.promo__interactive-list')

let genres = ['All', ...new Set(movies.map(item => item.Genre))]















reload(movies, listBox)