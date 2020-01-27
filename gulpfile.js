var gulp             = require('gulp'),
	autoprefixer     = require('gulp-autoprefixer'),
	iconfont         = require('gulp-iconfont'),
	iconfontCss      = require('gulp-iconfont-css'),
	sass             = require('gulp-sass'),
	sassLint         = require('gulp-sass-lint'),
	imagemin 		 = require('gulp-imagemin'),
	uglify 			 = require('gulp-uglify'),
	validator        = require('gulp-html'),
	path             = require('path');


gulp.task('iconfont', function(){
  return gulp.src(['assets/svg/*.svg'])
	.pipe(iconfontCss({
		fontName: 'icons',
		cssClass: 'font',
		path: 'conf/icon-font.scss',
		targetPath: '../../scss/confign/_icon-font.scss',
		fontPath: '../iconfonts/',
		prependUnicode: true,
	}))
	.pipe(iconfont({
		fontName: 'icons',
		prependUnicode: false,
		formats: ['ttf', 'woff2', 'woff'],
		normalize: true,
		centerHorizontally: true
	}))
	.on('glyphs', function(glyphs, options) {
		console.log(glyphs, options);
	})
	.pipe(gulp.dest('dist/iconfonts'));
});

gulp.task('copyHtml', function () {
    return gulp.src(['*.html'])
		.pipe(validator())
        .pipe(gulp.dest('dist'));
});

gulp.task('styles', function() {
	return gulp.src(['scss/**/*.scss'])
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(autoprefixer({
            overrideBrowserslist: ['last 3 versions'],
            cascade: false
        }))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('img', function(){
    return gulp.src(['assets/img/*'])
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('scripts', function(){
    return gulp.src(['js/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy-fonts', function () {
    gulp.src(['assets/fonts/*.ttf', 'assets/fonts/*.woff', 'assets/fonts/*.woff2', 'assets/fonts/*.eot'])
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('sasslint', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sassLint({
      config: '.sass-lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});


gulp.task('default', ['styles', 'copyHtml', 'img', 'scripts', 'iconfont', 'copy-fonts', 'sasslint'], function () {
	gulp.watch('scss/**/*.scss', ['styles','sasslint']);
	gulp.watch('assets/**/*', ['img']);
	gulp.watch('assets/**', ['copy-fonts', 'sasslint']);
	gulp.watch('assets/**', ['iconfont']);
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('*.html', ['copyHtml']);
});