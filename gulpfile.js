var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  var browserifyBundler = browserify('./app/index.js', {
    debug: true,
    transform: [ 'reactify' ]
  });

  return browserifyBundler.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/scripts'));
});

gulp.task('watch', function() {
  gulp.watch([ 'app/**/*' ], [ 'browserify' ])
});

gulp.task('default', [ 'watch' ]);