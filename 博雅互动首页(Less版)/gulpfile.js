/*
 * @Author: iceStone
 * @Date:   2016-01-27 10:21:56
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-01-27 11:08:35
 */

'use strict';
/**
 * 1. LESS编译 压缩 合并
 * 2. JS合并 压缩 混淆
 * 3. img复制
 * 4. html压缩
 */

// 在gulpfile中先载入gulp包，因为这个包提供了一些API
var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');

//Less编译、CSS压缩
gulp.task('style', function() {
  gulp.src('src/less/*.less')
    .pipe(less())
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


//JS压缩
gulp.task('script', function() {
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


//图片复制
gulp.task('image', function() {
  gulp.src('src/images/*.*')
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

//icon复制
gulp.task('icon', function () {
  gulp.src('src/*.ico')
      .pipe(gulp.dest('dist'))
      .pipe(browserSync.reload({
          stream: true
      }));
});

//html压缩
gulp.task('html', function() {
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


gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: ['dist']
    },
  }, function(err, bs) {
    console.log(bs.options.getIn(["urls", "local"]));
  });

  gulp.watch(['src/less/*.less', 'src/less/common/*.less', 'src/less/index/*.less'], ['style']);
  gulp.watch('src/js/*.js',['script']);
  gulp.watch('src/images/*.*',['image']);
    gulp.watch('src/*.ico',['icon']);
  gulp.watch('src/*.html',['html']);
});

gulp.task('default', ['style', 'script', 'image', 'icon', 'html']);
