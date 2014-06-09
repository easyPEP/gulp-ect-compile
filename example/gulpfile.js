var gulp = require('gulp');
var gutil = require('gulp-util');
var ectCompiler = require('../');

gulp.task('ect-compile', function () {
  gulp.src(['./src/**/*'])
    .pipe(ectCompiler())
    .pipe(gulp.dest('./out'));
});

gulp.task('default', ['ect-compile']);
