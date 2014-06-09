# [gulp](https://github.com/wearefractal/gulp)-ect

> Gulp plugin to compile ect.js template engine

## Install

Install with [npm](https://www.npmjs.org/package/npm)

```
npm install --save-dev gulp-ect-compile
```


## Example

js
```js
var gulp = require('gulp');
var gutil = require('gulp-util');
var ectCompiler = require('gulp-ect-compile');

gulp.task('ect-compile', function () {
  gulp.src(['./src/**/*'])
    .pipe(ectCompiler({}, {}))
    .pipe(gulp.dest('./out'));
});

gulp.task('default', ['ect-compile']);
```


## API

### ectCompiler(options, ectOptions)

See ect-repository for available [options](https://github.com/baryshev/ect#options)

## License

[MIT](https://github.com/easyPEP/gulp-ect-compile/blob/master/LICENSE) © Kalle Saas <kalle@easypep.de>
