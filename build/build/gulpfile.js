/* file: gulpfile.js */

var gulp          = require('gulp'),
    autoprefixer  = require('gulp-autoprefixer'),
    concat        = require('gulp-concat'),
    cmq           = require('gulp-combine-mq'),
    jshint        = require('gulp-jshint'),
    livereload    = require('gulp-livereload'),
    minifyCSS     = require('gulp-minify-css'),
    rename        = require('gulp-rename'),
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    uglify        = require('gulp-uglify');

/* build css */

gulp.task('build-css', function() {
  gulp.src('../sass/main.scss')
    .pipe(sourcemaps.init())
      .pipe(sass()).on('error', sass.logError)
      .pipe(autoprefixer({
        browsers: ['last 3 versions', 'ie >= 8'],
      }))
      .pipe(concat('main.compiled.css'))
      //.pipe(cmq({beautify:false}))
      .pipe(gulp.dest('../css/'))
      .pipe(minifyCSS())
      .pipe(rename('main.compiled.min.css'))
    .pipe(sourcemaps.write('../css/'))
    .pipe(gulp.dest('../css/'))
    .pipe(livereload());
});

// /* build js */
//
// gulp.task('build-js', function() {
//   gulp.src(['../js/grunts/*.js','../js/base.js'])
//     .pipe(sourcemaps.init())
//       .pipe(concat('main.compiled.js'))
//       .pipe(gulp.dest('../js'))
//       .pipe(rename('main.compiled.min.js'))
//       .pipe(uglify())
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('../js'))
//     .pipe(livereload());
// });


/* updated watch task to include sass */

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['../js/*.js', '../js/grunts/*.js'], ['build-js']);
  gulp.watch('../sass/**/*.scss', ['build-css']);
});
