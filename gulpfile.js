var gulp = require('gulp');

var fileinclude  = require('gulp-file-include');
var utf8Convert = require('gulp-utf8-convert');
 

gulp.task('fileinclude', function() {

<<<<<<< HEAD
    gulp.src('page/test.html')
=======
    gulp.src('index.html')
>>>>>>> origin/master
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest('dist'));
	
});
gulp.task('convert',function() {
<<<<<<< HEAD
    gulp.src("page/test.html")
=======
    gulp.src("index.html")
>>>>>>> origin/master
        .pipe(utf8Convert({
            encNotMatchHandle:function (file) {
                //notify 
            }
        }))
        .pipe(gulp.dest('./'));
});

