var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify')

gulp.task('default', function() {
  return gulp.src(['./js/impress.js', './js/jquery.wrapper.js'])
    .pipe(concat('jquery.impress.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});
