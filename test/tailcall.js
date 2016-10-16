/*
 * @Author: deyuhua
 * @Date: Sun Oct 16 13:53:36 2016
 * @Last modified by: deyuhua
 * @Last modified time: Sun Oct 16 13:53:36 2016
 * @Email: deyuhua@gmail.com
 * @File Path: /home/deyuhua/hobby/fp/test/tailcall.js
 * @File Name: tailcall.js
*/

'use strict';

import assert from 'assert';
import fp from '../index';

function fac(n) {

    function _fac(acc, n) {

        return n === 0 ? acc : _fac.bind(null, acc * n, n - 1);
    }

    return fp.Tailcall.trampolining(_fac.bind(null, 1, n));
}

describe('tail recursion call unit test', function() {
    describe('tail recursion call trampolining', function() {

        it('should return 120 when fac(5)', function() {
            assert.equal(120, fac(5));
        });

        it('should return Infinity when fac(1000000)', function() {
            assert.equal(true, !isFinite(fac(1000000)));
        });
    });
});
