const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');

const styles = () => {
   return src('src/scss/app.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('style.css'))
      .pipe(dest('src/css'))
      .pipe(browserSync.stream());
}

const files = () => {
   return src('src/*.html')
      .pipe(browserSync.stream());
}

const browserSyncJob = () => {
   browserSync.init({
     server: "src/",
     notify: false
   });

   watch('src/*.html', files);
   watch('src/scss/', styles);
};

exports.default = browserSyncJob;