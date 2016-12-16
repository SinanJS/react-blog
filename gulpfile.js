var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var less = require('gulp-less');
//var path = require('path');

gulp.task('less', function () {
    return gulp.src('public/css/*.less')
        .pipe(plumber({}, true, function(err){
            console.log('ERROR!!!!');
            console.log(err);
        }))
        .pipe(less())
        .pipe(gulp.dest('public/css'));
});

gulp.task('jsx', function() {
    gulp.src(["views/**/*.jsx","public/javascripts/**/*.jsx"])
        .pipe(plumber({}, true, function(err){
            console.log('ERROR!!!!');
            console.log(err);
        }))
        .pipe(babel({
            presets: ['react','es2015']
        }))
    .pipe(gulp.dest("public/javascripts"));
});


gulp.task("default",['jsx','less'],function(){
    gulp.watch('views/**/*.jsx',function(){
       gulp.start(['jsx']);
    });
    gulp.watch('public/css/*.less',function(){
       gulp.start(['less']);
    });
});