const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css

function style() {
    //path to scss file
    return gulp.src('./scss/**/*.scss')
    //pass the file to complier 
    .pipe(sass().on('error', sass.logError))
    //where to save the complied CSS
    .pipe(gulp.dest('./css'))
    // stream changes to brower
    .pipe(browserSync.stream())

}
function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;