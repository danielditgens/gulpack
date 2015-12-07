import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import runSequence from 'run-sequence';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

/* Import package.json for later use */
import pkg from './package.json';

/* Importing all task we need */
import {clean} from './etc/gulp/clean';
import {serve} from './etc/gulp/serve';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('clean', clean);
gulp.task('serve', serve);

gulp.task('default', ['clean'], cb => {
  $.util.log(pkg.name, pkg.version, pkg.license);
  runSequence('serve', cb);
});
