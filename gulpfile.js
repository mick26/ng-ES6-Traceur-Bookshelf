/* ===========================================================
Ref.
https://www.npmjs.com/package/gulp-express
gulp-express lets you run node commands e.g. start Node server

============================================================ */
var gulp = require('gulp');
var server = require('gulp-express');


gulp.task('node-server', function () {
    return server.run(['server.js']);
});

gulp.task('default', ['node-server']);
