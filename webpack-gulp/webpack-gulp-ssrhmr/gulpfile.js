// Основной модуль
const gulp = require("gulp")
let configFTP = {
    host: "", // Адрес FTP сервера
    user: "", // Имя пользователя
    password: "", // Пароль
    parallel: 5, // Кол-во одновременных потоков
}
// Импорт путей
// Получаем имя папки проекта
const nodePath = require("path")
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist` // Также можно использовать rootFolder
const srcFolder = `./src`

const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/assets/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/assets/img/`,
        fonts: `${buildFolder}/assets/fonts/`,
        files: `${buildFolder}/files/`,
    },
    src: {
        js: `${srcFolder}/js/app.tsx`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`, //.pug
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.{jsx,js,ts,tsx}`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`, //.pug
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: "./dist/assets",
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``,
}

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

// Передаем значения в глобальную переменную
app = {
    isBuild: process.argv.includes("--build"),
    isDev: !process.argv.includes("--build"),
    path: path,
    gulp: gulp,
    plugins: plugins,
}

// Импорт задач
// import { copy } from "./gulp/tasks/copy.js"
const del = require("del")
const reset = () => {
    return del(app.path.clean)
}

// import { html } from "./gulp/tasks/html.js"
// import { server } from "./gulp/tasks/server.js"
const dartSass = require("sass")
const gulpSass = require("gulp-sass")
const rename = require("gulp-rename")

const cleanCss = require("gulp-clean-css") // Сжатие CSS файла
const webpcss = require("gulp-webpcss") // Вывод WEBP изображений
const autoprefixer = require("gulp-autoprefixer") // Добавление вендорных префиксов
const groupCssMediaQueries = require("gulp-group-css-media-queries") // Групировка медиа запросов

const sass = gulpSass(dartSass)

const scss = () => {
    return (
        app.gulp
            .src(app.path.src.scss, { sourcemaps: app.isDev })
            .pipe(
                app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: "SCSS",
                        message: "Error: <%= error.message %>",
                    })
                )
            )
            .pipe(app.plugins.replace(/@img\//g, "../img/"))
            .pipe(
                sass({
                    outputStyle: "expanded",
                })
            )
            .pipe(groupCssMediaQueries())
            .pipe(
                autoprefixer({
                    grid: true,
                    overrideBrowserslist: ["last 3 versions"],
                    cascade: true,
                })
            )

            // Раскомментировать если нужен не сжатый дубль файла стилей
            .pipe(app.gulp.dest(app.path.build.css))
            .pipe(cleanCss())
            .pipe(
                rename({
                    extname: ".min.css",
                })
            )
            .pipe(app.gulp.dest(app.path.build.css))
            .pipe(app.plugins.browsersync.stream())
    )
}

// import { js } from "./gulp/tasks/js.js"
const webp = require("gulp-webp")
// const imagemin = require("gulp-imagemin")

const images = () => {
    return (
        app.gulp
            .src(app.path.src.images)
            .pipe(
                app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: "IMAGES",
                        message: "Error: <%= error.message %>",
                    })
                )
            )
            .pipe(app.plugins.newer(app.path.build.images))
            .pipe(webp())
            .pipe(app.gulp.dest(app.path.build.images))
            .pipe(app.gulp.src(app.path.src.images))
            .pipe(app.plugins.newer(app.path.build.images))
            // .pipe(
            //     imagemin({
            //         progressive: true,
            //         svgoPlugins: [{ removeViewBox: false }],
            //         interlaced: true,
            //         optimizationLevel: 3, // 0 to 7
            //     })
            // )
            .pipe(app.gulp.dest(app.path.build.images))
            .pipe(app.gulp.src(app.path.src.svg))
            .pipe(app.gulp.dest(app.path.build.images))
            .pipe(app.plugins.browsersync.stream())
    )
}

// import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js"
const fs = require("fs")
const fonter = require("gulp-fonter-fix")
const ttf2woff2 = require("gulp-ttf2woff2")

const otfToTtf = () => {
    // Ищем файлы шрифтов .otf
    return (
        app.gulp
            .src(`${app.path.srcFolder}/fonts/*.otf`, {})
            .pipe(
                app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: "FONTS",
                        message: "Error: <%= error.message %>",
                    })
                )
            )
            // Конвертируем в .ttf
            .pipe(
                fonter({
                    formats: ["ttf"],
                })
            )
            // Выгружаем в исходную папку
            .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
    )
}
const ttfToWoff = () => {
    // Ищем файлы шрифтов .ttf
    return (
        app.gulp
            .src(`${app.path.srcFolder}/fonts/*.ttf`, {})
            .pipe(
                app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: "FONTS",
                        message: "Error: <%= error.message %>",
                    })
                )
            )
            // Конвертируем в .woff
            .pipe(
                fonter({
                    formats: ["woff"],
                })
            )
            // Выгружаем в папку с результатом
            .pipe(app.gulp.dest(`${app.path.build.fonts}`))
            // Ищем файлы шрифтов .ttf
            .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
            // Конвертируем в .woff2
            .pipe(ttf2woff2())
            // Выгружаем в папку с результатом
            .pipe(app.gulp.dest(`${app.path.build.fonts}`))
            // Ищем файлы шрифтов .woff и woff2
            .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.{woff,woff2}`))
            // Выгружаем в папку с результатом
            .pipe(app.gulp.dest(`${app.path.build.fonts}`))
    )
}
const fontsStyle = () => {
    // Файл стилей подключения шрифтов
    let fontsFile = `${app.path.srcFolder}/scss/fonts.scss`
    // Проверяем существуют ли файлы шрифтов
    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
        if (fontsFiles) {
            // Проверяем существует ли файл стилей для подключения шрифтов
            if (!fs.existsSync(fontsFile)) {
                // Если файла нет, создаем его
                fs.writeFile(fontsFile, "", cb)
                let newFileOnly
                for (var i = 0; i < fontsFiles.length; i++) {
                    // Записываем подключения шрифтов в файл стилей
                    let fontFileName = fontsFiles[i].split(".")[0]
                    if (newFileOnly !== fontFileName) {
                        let fontName = fontFileName.split("-")[0]
                            ? fontFileName.split("-")[0]
                            : fontFileName
                        let fontWeight = fontFileName.split("-")[1]
                            ? fontFileName.split("-")[1]
                            : fontFileName
                        if (fontWeight.toLowerCase() === "thin") {
                            fontWeight = 100
                        } else if (fontWeight.toLowerCase() === "extralight") {
                            fontWeight = 200
                        } else if (fontWeight.toLowerCase() === "light") {
                            fontWeight = 300
                        } else if (fontWeight.toLowerCase() === "medium") {
                            fontWeight = 500
                        } else if (fontWeight.toLowerCase() === "semibold") {
                            fontWeight = 600
                        } else if (fontWeight.toLowerCase() === "bold") {
                            fontWeight = 700
                        } else if (
                            fontWeight.toLowerCase() === "extrabold" ||
                            fontWeight.toLowerCase() === "heavy"
                        ) {
                            fontWeight = 800
                        } else if (fontWeight.toLowerCase() === "black") {
                            fontWeight = 900
                        } else {
                            fontWeight = 400
                        }
                        fs.appendFile(
                            fontsFile,
                            `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`,
                            cb
                        )
                        newFileOnly = fontFileName
                    }
                }
            } else {
                // Если файл есть, выводим сообщение
                console.log(
                    "Файл scss/fonts.scss уже существует. Для обновления файла нужно его удалить!"
                )
            }
        }
    })

    return app.gulp.src(`${app.path.srcFolder}`)
    function cb() {}
}

const svgSprite = require("gulp-svg-sprite")
const svgSpriteTask = () => {
    return app.gulp
        .src(`${app.path.src.svgicons}`, {})
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "SVG",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(
            svgSprite({
                mode: {
                    stack: {
                        sprite: `../icons/icons.svg`,
                        // Создавать страницу с перечнем иконок
                        example: true,
                    },
                },
            })
        )
        .pipe(app.gulp.dest(`${app.path.build.images}`))
}

const zipPlugin = require("gulp-zip")

const zip = () => {
    del(`./${app.path.rootFolder}.zip`)
    return app.gulp
        .src(`${app.path.buildFolder}/**/*.*`, {})
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "ZIP",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(zipPlugin(`${app.path.rootFolder}.zip`))
        .pipe(app.gulp.dest("./"))
}

const vinylFTP = require("vinyl-ftp")
const util = require("gulp-util")

const ftp = () => {
    configFTP.log = util.log
    const ftpConnect = vinylFTP.create(configFTP)
    return app.gulp
        .src(`${app.path.buildFolder}/**/*.*`, {})
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "FTP",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`))
}

// Наблюдатель за изменениями в файлах
function watcher() {
    // gulp.watch(path.watch.html, html) //gulp.series(html, ftp)
    gulp.watch(path.watch.scss, scss)
    // gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, images)
}

// Последовательная обработака шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(scss, images))

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher))
const build = gulp.series(reset, mainTasks)
const deployZIP = gulp.series(reset, mainTasks, zip)
const deployFTP = gulp.series(reset, mainTasks, ftp)

// Экспорт сценариев
// export { svgSpriteTask }
// export { dev }
// export { build }
// export { deployZIP }
// export { deployFTP }

// Выполнение сценария по умолчанию
gulp.task("default", dev)
gulp.task("build", build)
