var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var rename     = require('gulp-rename');
var jsmin = require('gulp-jsmin');
var clean = require('gulp-clean');
 
gulp.task('build-js', function() {
    browserify('./src/app.jsx', { debug: true })
        .transform(babelify)
        .bundle()
        .on("error", function (err) { console.log("Error : " + err.message); })
        .pipe(source('app.js'))
        .pipe(gulp.dest('./build/tmp/'))
});
 
gulp.task('min-js', function () {
    gulp.src('build/tmp/app.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build/min/'));
});
 
gulp.task('clean-js', function () {
    return gulp.src('build/tmp/', {read: false})
        .pipe(clean());
});