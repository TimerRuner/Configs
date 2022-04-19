import fileinclude from "gulp-file-include"
import uglify from "gulp-uglify"
import rename from "gulp-rename"

export const js = () => {
    return app.gulp
        .src(app.path.src.js, { sourcemaps: app.isDev })
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "JS",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(fileinclude())
        .pipe(app.gulp.dest(app.path.build.js))

        .pipe(app.gulp.src(app.path.src.js, { sourcemaps: app.isDev }))
        .pipe(fileinclude())
        .pipe(uglify())
        .pipe(
            rename({
                extname: ".min.js",
            })
        )
        .pipe(app.gulp.dest(app.path.build.js))

        .pipe(app.plugins.browsersync.stream())
}
