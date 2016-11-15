var gulp = require('gulp');
var jsonToSass = require('gulp-json-to-sass');

gulp.task('default', function () {
    return gulp.src('src/yaml/**/*.scss')
        .pipe(jsonToSass({
            jsonPath: 'src/yaml/Colors.json',
            scssPath: 'src/yaml/variables.scss'
        }))
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});