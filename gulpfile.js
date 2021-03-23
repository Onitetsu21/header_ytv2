const gulp = require('gulp')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const terser = require('gulp-terser')
const browsersync = require('browser-sync')

function clean() {
  return del('./dist')
}

function css() {
  return gulp.src('src/style.css')
    .pipe(postcss([
      cssnano()
    ]))
    .pipe(gulp.dest('./dist/'))
}

function html() {
  return gulp.src('src/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
      removeRedundantAttributes: true,
      removeEmptyAttribute: true
    }))
    .pipe(gulp.dest('./dist/'))
}

function js() {
  return gulp.src('src/**/*.js')
    .pipe(terser())
    .pipe(gulp.dest('./dist/'))
}

function serve(cb) {
  browsersync.init({
    server: {
      baseDir: './dist'
    }
  })

  cb()
}

function reload(cb) {
  browsersync.reload()

  cb()
}

const build = gulp.series(
  clean, 
  gulp.parallel(css, html, js),
)

gulp.watch(['src/**/*'], gulp.series(build, reload))

exports.default = gulp.series(
  build,
  serve
)
