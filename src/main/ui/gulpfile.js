const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const inject = require('gulp-inject');
const gulpRemoveHtml = require('gulp-remove-html');
const SystemBuilder = require('systemjs-builder');
const dist = 'dist';

var libraries=[
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/systemjs/dist/system.src.js'
];

var css=[
    'node_modules/bootstrap/dist/css/bootstrap.css'
];



// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del([dist+'/**/*', 'compiled/**/*']);
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
    return gulp
        .src('app/**/*.ts')
        .pipe(sourcemaps.init())          // <--- sourcemaps
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))      // <--- sourcemaps
        .pipe(gulp.dest('compiled'));
});

// copy dependencies
gulp.task('copy:libs',  ['clean'], function() {
    return gulp.src(libraries.concat(css))
        .pipe(gulp.dest(dist+'/lib'))
});


// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], function() {
    return gulp.src(['app/**/*', '!app/**/*.ts'], { base : './' })
        .pipe(gulp.dest(dist))
});


// copy static assets - i.e. non TypeScript compiled source
gulp.task('systemjs-bundle',['compile', 'copy:libs', 'copy:assets'], function() {
    var builder = new SystemBuilder();
    return builder.loadConfig('./systemjs.config.js')
        .then(function(){
            var outputFile = dist+'/bundle.js';
            var prod = false;
            return builder.buildStatic('app', outputFile, {
                minify: prod,
                mangle: prod,
                rollup: prod,
                sourceMaps: true,
            });
        })
});

gulp.task('index',  ['copy:assets', 'copy:libs', 'systemjs-bundle'], function() {
    var target = gulp.src('index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src([dist+'/lib/**', dist+'/bundle.js'], {read: false});

    return target
        .pipe(inject(sources, {relative: true, ignorePath: 'dist'}))
        .pipe(gulpRemoveHtml())
        .pipe(gulp.dest(dist));
});

// copy dependencies
gulp.task('copy:sources',  ['clean'], function() {
    return gulp.src('app/**')
        .pipe(gulp.dest(dist+'/source/'))
});

gulp.task('default', ['systemjs-bundle', 'index', 'copy:sources']);

gulp.task("watch", function() {
    // calls "build-js" whenever anything changes
    gulp.watch("app/**", ["default"]);
});