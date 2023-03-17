const { src, dest } = require('gulp');
const webp = require('gulp-webp');

exports.default = function() {
    src("../librepago-wallet-app/assets/images/*.png")
        .pipe(webp())
        .pipe(dest("../librepago-wallet-app/assets/images/"))

}