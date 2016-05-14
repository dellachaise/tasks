var gulp = require("gulp"),
	uglify = require('gulp-uglify'),
	watch = require('gulp-watch'),
	rimraf = require('rimraf'),
	concat = require('gulp-concat'),
	server = require("gulp-server-livereload"),
	sass = require('gulp-sass'),
	prefix = require('gulp-autoprefixer'),
	wiredep = require('wiredep').stream;

gulp.task("bower", function() {
	gulp.src("./app/*.html")
		.pipe(wiredep({
			directory: "app/libs"
		}))
		.pipe(gulp.dest("./app"));
});


gulp.task('js:build', function() {
	return gulp.src('app/js/*.js')
		.pipe(concat("all.js"))
		.pipe(uglify())
		.pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
	watch("app/js/**/*.js", function(event, cb) {
		gulp.start('js:build');
	});
	watch("app/sass/**/*.js", function(event, cb) {
		gulp.start('style');
	});
	watch("bower.json", function(event, cb) {
		gulp.start('bower');
	});
});

gulp.task('clean', function(cb) {
	rimraf("./build", cb);
});

gulp.task("server", function() {
	gulp.src('app')
		.pipe(server({
			livereload: true,
			defaultFile: 'index.html',
			open: true
		}));
});

gulp.task("style", function() {
	gulp.src('app/sass/**/*.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix({
			browsers: ['last 15 versions']
		}))
		.pipe(gulp.dest('app/css'));
});


gulp.task("default", ['server', 'watch']);
