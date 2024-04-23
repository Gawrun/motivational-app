const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minify');
const minifyCss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

gulp.task('js', () =>
    gulp.src('js/*.js')
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
);

gulp.task('sass', () =>
    gulp.src('styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'))
);

gulp.task('watch', () => {
    browserSync.init({
        server: './'
    });

    gulp.watch('js/*.js', gulp.series('js')).on('change', browserSync.reload);
    gulp.watch('styles/*.scss', gulp.series('sass')).on('change', browserSync.reload);
});

gulp.task('default', gulp.series('js', 'sass', 'watch'));
