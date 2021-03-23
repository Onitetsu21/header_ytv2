const { src, dest, series, parallel, watch } = require('gulp')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const htmlmin = require('gulp-htmlmin')
const del = require('del')
const terser = require('gulp-terser')
const browsersync = require('browser-sync')
const imagemin = require('gulp-imagemin')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const browserify = require('browserify')
const babelify = require('babelify')

const io = {
  src: './src',
  dest: './dist'
}

function clean() {
  return del(io.dest)
}

function css() {
  return src(io.src + '/style.css')
    .pipe(postcss([
      cssnano()
    ]))
    .pipe(dest(io.dest))
}

function html() {
  return src(io.src + '/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
      removeRedundantAttributes: true,
      removeEmptyAttribute: true
    }))
    .pipe(dest(io.dest))
}

function js() {
  return browserify({
    entries: io.src + '/entry.js',
    debug: true
  })
    .transform(babelify.configure({
      presets: ['@babel/preset-env']
    }))
    .bundle()
    .pipe(source('entry.js'))
    .pipe(buffer())
    .pipe(dest(io.dest))
}

function image() {
  return src(io.src + '/images/*.jpg')
    .pipe(imagemin({
      interlaced: true,
      progressive: true,
      optimizationLevel: 5,
      svgoPlugins: [
	  {
	      removeViewBox: true
	  }
      ]
    }))
    .pipe(dest(io.dest + '/images'))
}

function serve(cb) {
  browsersync.init({
    server: {
      baseDir: io.dest
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
  //  parallel(css, html, js, image),
  parallel(html, js)
)

watch([io.src + '/**/*'], series(build, reload))

exports.default = series(
  build,
  serve
)
