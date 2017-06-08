
//导包
var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');

//Less编译、CSS合并、CSS压缩
gulp.task('cssTask', function() {
  gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(concat('index.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


//JS合并、JS压缩
gulp.task('jsTask', function() {
  gulp.src('src/js/*.js')
    .pipe(concat('index.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


//图片复制
gulp.task('imageTask', function() {
  gulp.src('src/images/*.*')
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


//icon复制
gulp.task('iconTask', function () {
  gulp.src('src/*.ico')
      .pipe(gulp.dest('dist'))
      .pipe(browserSync.reload({
          stream: true
      }));
});


//html压缩
gulp.task('htmlTask', function() {
  gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('server', function() {
  browserSync({
    server: {
      baseDir: ['dist']
    },
  }, function(err, bs) {
    console.log(bs.options.getIn(["urls", "local"]));
  });

  gulp.watch(['src/less/*.less', 'src/less/common/*.less', 'src/less/index/*.less'], ['cssTask']);
  gulp.watch('src/js/*.js',['jsTask']);
  gulp.watch('src/images/*.*',['imageTask']);
    gulp.watch('src/*.ico',['iconTask']);
  gulp.watch('src/*.html',['htmlTask']);
});

gulp.task('defaultTask', ['cssTask', 'jsTask', 'imageTask', 'iconTask', 'htmlTask']);
