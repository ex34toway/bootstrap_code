var gulp = require('gulp'),
  sourcemap = require('gulp-sourcemaps'),
  less = require('gulp-less'),
  notify = require('gulp-notify'),
  plumber = require('gulp-plumber'),
  webserver = require('gulp-webserver'); // 本地服务器

// webserver
gulp.task('webserver', function() {
  gulp.src( './public/' ) // 服务器目录（./代表根目录）
  .pipe(webserver({ // 运行gulp-webserver
    livereload: true, // 启用LiveReload
    open: true // 服务器启动时自动打开网页
  }));
});

// less
gulp.task('less', function() {
  gulp.src(
   [//'./less/bootstrap/bootstrap.less',
    './public/less/base/base.less',
     './public/less/bootstrap-3.2.0/bootstrap.less'
    ])
    .pipe(sourcemap.init())
    .pipe(less())
    //.pipe(cssmin())
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(sourcemap.write('./maps'))
    .pipe(gulp.dest('./public/css'));
});

// 监听任务
gulp.task('watch', function () {
  gulp.watch('./public/less/base/*.less', ['less']);
  gulp.watch('./public/less/bootstrap-3.2.0/*.less', ['less']);
  gulp.watch('*.html', ['html']);
});

// 默认任务
gulp.task('default',['less','webserver','watch']);