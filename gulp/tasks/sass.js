module.exports = () => {
    $.gulp.task('sass', () => {
        return $.gulp.src('src/static/sass/style.scss')
            .pipe($.glp.sourcemaps.init())
            .pipe($.glp.sass({
                'include css': true
            }))
            .pipe($.glp.csso())
            .pipe($.glp.autoprefixer({
                browsers: ['last 10 versions'],
                cascade: false
            }))
            .on('error', $.glp.notify.onError({
                title: 'style'
            }))
            .pipe($.glp.sourcemaps.write())
            .pipe($.gulp.dest('dist/style'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
}