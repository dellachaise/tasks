var gulp = require("gulp");
var server =require ("gulp-server-livereload");
var sass = require ("sass");
var prefix = require("autoprefixer");
var wiredep = require('wiredep').stream;


gulp.task("something", function () {

});


gulp.task("server", function () {
	gulp.src('app')
		.pipe(server({
			livereload: true,
			defaultFile: "index.html",
			open: true
		}));
});


gulp.task("style", function() {
	gulp.src("app/sass/**/*/sass")
		.pipe(sass().on("error", sass.logError))
		.pipe(prefix({
			browsers: ["last 15 versions"]
		}))
		.pipe(gulp.dest("app/css"));

});

gulp.task("watch", function () {
	gulp.watch("app/sass/**/*.sass", ["style"]);
	gulp.watch("bower.json", ["bower"]);
})

gulp.task("default", ["server", "watch"]); //все меняется в реальном времени

//wiredep
gulp.task("bower", function () {
	gulp.src('"app/.html')
	.pipe(wiredep({
		directory: "app/libs"
	}))
	.pipe(gulp.dest("app"));
});