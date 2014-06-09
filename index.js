var es = require('event-stream');
var gutil = require('gulp-util');
var path = require('path');
var ect = require('ect');

module.exports = function (opt, ectOpt) {

  opt = opt || {};
  if (!opt.gzip) opt.gzip = false; // gzip does not make sense to me, but keeping it anyway.

  ectOpt = ectOpt || {};
  if (!ectOpt.ext) ectOpt.ext = '.ect';

  return es.map(function (file, callback) {
    try {
      var filePath = file.base;
      ectOpt.root = opt.root = filePath;
      try {
        ect(ectOpt).compiler(opt);
      } catch (e) {
        gutil.log(gutil.colors.red('Error gulp-ect-compiler: ' + e.message));
      }
      callback(null, file);
    } catch (e) {
      gutil.log(gutil.colors.red('Error Locals gulp-ect-compiler: ' + e.message));
    }
  });
};
