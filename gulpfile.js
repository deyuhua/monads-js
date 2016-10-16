/*
 * @Author: deyuhua
 * @Date: Sun Oct 16 13:42:11 2016
 * @Last modified by: deyuhua
 * @Last modified time: Sun Oct 16 13:42:11 2016
 * @Email: deyuhua@gmail.com
 * @File Path: /home/deyuhua/hobby/fp/test/gulpfile.js
 * @File Name: gulpfile.js
*/

'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const babel = require('babel-register');

gulp.task('default', ['test']);

// task for unit test
gulp.task('test', ['test-monads', 'test-tailcall']);

function helper (testFilePath) {
    return gulp.src(testFilePath)
        .pipe(mocha({
            compilers: {
                js: babel
            },
            reporter: 'nyan'
        }));
}

gulp.task('test-monads', () => helper('./test/monads.js'));
gulp.task('test-tailcall', () => helper('./test/tailcall.js'));
