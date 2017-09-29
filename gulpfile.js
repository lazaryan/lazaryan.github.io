var gulp = require('gulp'), 
    sass = require('gulp-sass'), 
    browserSync = require('browser-sync');

gulp.task("sass" , function(){
  return gulp.src('sass/**/*.+(sass|scss)')
         .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass(вместо compressed было expanded )
         .pipe(gulp.dest('css'))
         .pipe(browserSync.reload({stream: true}))
});    

gulp.task('browser-sync' , function(){
  browserSync({
    server: {
      baseDir: ''
    },
    notify: false
  });
});

gulp.task('watch' , ['browser-sync' , 'sass'] , function(){
  gulp.watch('sass/**/*.+(sass|scss)' , ['sass']);
  gulp.watch('*.html' , browserSync.reload);
  gulp.watch('js/**/*.js' , browserSync.reload);
});

gulp.task('default', ['watch']);