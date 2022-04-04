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
            .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
            .pipe(
                app.plugins.if(
                    app.isBuild,
                    autoprefixer({
                        grid: true,
                        overrideBrowserslist: ["last 3 versions"],
                        cascade: true,
                    })
                )
            )
            .pipe(
                app.plugins.if(
                    app.isBuild,
                    webpcss({
                        webpClass: ".webp",
                        noWebpClass: ".no-webp",
                    })
                )
            )
            // Раскомментировать если нужен не сжатый дубль файла стилей
            .pipe(app.gulp.dest(app.path.build.css))
            .pipe(app.plugins.if(app.isBuild, cleanCss()))
            .pipe(
                rename({
                    extname: ".min.css",
                })
            )
            .pipe(app.gulp.dest(app.path.build.css))
            .pipe(app.plugins.browsersync.stream())
    )
}
