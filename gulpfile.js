var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require('gulp-uglify');

function style() {
  return gulp.src('build/scss/main.scss')
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest('build/css'))
    // .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer({
      cascade: false
    }), cssnano()]))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    },
    // ghostMode: false
  });
  gulp.watch('build/scss/*.scss', style);
  gulp.watch('*.html').on('change', browserSync.reload);
  // gulp.watch('build/js/*.js').on('change', browserSync.reload);
  gulp.watch('build/js/*.js', scripts);
}

function scripts() {
  return gulp.src('build/js/*.js')
    .pipe(uglify())
    // .pipe(rename({ extname: '.min.js'}))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
}

gulp.task('default', watch);


exports.style = style;
exports.watch = watch;
exports.uglify = uglify;
exports.scripts = scripts;
