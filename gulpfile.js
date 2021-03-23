const { join } = require('path')
const { src, dest, series, parallel, watch } = require('gulp')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const terser = require('gulp-terser')
const browsersync = require('browser-sync')

const io = {
  src: join('src'),
  dest: join('build')
}

function clean() {
  return del(join(io.dest))
}

function css() {
  return src(join(io.src, 'style.css'))
    .pipe(postcss([
      cssnano()
    ]))
    .pipe(dest(join(io.dest)))
}

function html() {
  return src(join(io.src, 'index.html'))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
      removeRedundantAttributes: true,
      removeEmptyAttribute: true
    }))
    .pipe(dest(join(io.dest)))
}

function js() {
  return src(join(io.src, '**/*.js'))
    .pipe(terser())
    .pipe(dest(join(io.dest)))
}

function serve(cb) {
  browsersync.init({
    server: {
      baseDir: join(io.dest)
    }
  })

  cb()
}

function reload(cb) {
  browsersync.reload()

  cb()
}

// --------------------------------------------

const build = series(
  clean, 
  parallel(css, html, js),
)

watch([io.src+'**/*'], series(build, reload))

exports.default = series(
  build,
  serve
)
