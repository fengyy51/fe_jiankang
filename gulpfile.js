var gulp = require('gulp');

var fileinclude  = require('gulp-file-include');
var utf8Convert = require('gulp-utf8-convert');
 

gulp.task('fileinclude', function() {

    gulp.src('page/test.html')
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest('dist'));
	
});
gulp.task('convert',function() {
    gulp.src("page/test.html")
        .pipe(utf8Convert({
            encNotMatchHandle:function (file) {
                //notify 
            }
        }))
        .pipe(gulp.dest('./'));
});

