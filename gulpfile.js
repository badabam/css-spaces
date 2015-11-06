var gulp = require('gulp');
var sass = require('gulp-sass');
var del  = require('del');
var rename = require('gulp-rename');

// start development
gulp.task('default', ['dev']);

// start scss watch mode
gulp.task('dev', ['sass'], function () {
  gulp.watch('source/**/*.scss', ['sass']);
});

// create normal and minified versions
gulp.task('build', ['clean', 'sass', 'sass-min']);

// create readable css from scss files
gulp.task('sass', function () {
  return gulp.src('source/*.scss')
    .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/'))
});

// create minified scss files
gulp.task('sass-min', function () {
  return gulp.src('source/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename(function (path) {
      path.basename += ".min";
      return path;
    }))
    .pipe(gulp.dest('dist/'))
});

// delete dist folder
gulp.task('clean', function () {
  return del(['dist']);
});
