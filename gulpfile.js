const { src, dest } = require('gulp');
const webp = require('gulp-webp');

exports.default = function () {
    src("images/*")
        .pipe(webp())
        .pipe(dest("dist"))

}