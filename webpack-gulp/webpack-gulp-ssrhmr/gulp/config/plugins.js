const replace = require("gulp-replace") // Поиск и замена
const plumber = require("gulp-plumber") // Обработка ошибок
const notify = require("gulp-notify") // Сообщения (подсказки)
const browsersync = require("browser-sync") // Локальный сервер
const newer = require("gulp-newer") // Проверка обновления
const ifPlugin = require("gulp-if") // Условное ветвление

// Экспортируем объект
const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin,
}
