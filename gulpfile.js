const { join } = require('path')
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
  src: join('src'),
  dest: join('dist')
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
  
  return browserify({
    entries: join(io.src, 'entry.js'),
    debug: true
  })
    .transform(babelify.configure({
      presets: ['@babel/preset-env']
    }))
    .bundle()
    .pipe(source('entry.js'))
    .pipe(buffer())
    .pipe(dest(join(io.dest)))
}

function image() {
  return src(join(io.src, 'images','*.jpg'))
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
    .pipe(dest(join(io.dest, 'images')))
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
  //  parallel(css, html, js, image),
  parallel(html, js)
)

watch([join(io.src,'**/*')], series(build, reload))

exports.default = series(
  build,
  serve
)
