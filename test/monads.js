/*
 * @Author: deyuhua
 * @Date: Sun Oct 16 13:26:49 2016
 * @Last modified by: deyuhua
 * @Last modified time: Sun Oct 16 13:26:49 2016
 * @Email: deyuhua@gmail.com
 * @File Path: /home/deyuhua/hobby/fp/test/monads.js
 * @File Name: monads.js
*/

'use strict';

import assert from 'assert';
import fp from '../index';

function monadsHelper (monads) {

    it('should return f(x) when input x', function() {
        assert.equal(10, monads(5).bind(v => 2 * v));
        assert.equal(25, monads(5).bind(v => Math.pow(v, 2)));
    });

    it('should return monads when bind monads', function() {
        assert.equal(true, monads(5).bind(monads).is_monads);
        assert.equal(10, monads(5).bind(monads).bind(v => 2 * v));
    });

    it('should return f(g(x)) when muti bind', function() {
        assert.equal(20, monads(5).bind(v1 => monads(15).bind(v2 => v1 + v2)));
    });

    it('shold return monads when chain', function() {
        assert.equal(true, monads(5).chain(v => v).is_monads);
        assert.equal(10, monads(5).chain(v => 2 * v).bind(v => v));
    });
}

describe('monads unit test', function() {
    describe('MONADS MACRO', function() {
        it('shouble return fcuntion whether modifer function is given or not', function() {
            assert.equal('function', typeof fp.Monads.MONADS());
            assert.equal('function', typeof fp.Monads.MONADS((monads, value) => {}));
        });
    });

    describe('identity monads', function() {

        monadsHelper(fp.Monads.identity);
    });

    describe('maybe monads', function() {

        const maybe = fp.Monads.maybe;

        monadsHelper(maybe);
        it('should return Nothing when value is undefined or null, otherwise just like identity monads', function() {
            assert.equal('Nothing', maybe().bind(v => v).toString());
        });
    });

    describe('lazy monads', function() {

        const lazy = fp.Monads.lazy;

        it('should return generator', function() {

            const result = lazy([1,2,3]).bind(v => v + 1);

            assert.equal(2, result.next().value);
            assert.equal(3, result.next().value);
            assert.equal(4, result.next().value);
            assert.equal('undefined', typeof result.next().value);

            assert.equal(1, lazy(0).bind(v => v + 1).next().value);
        });
    });

    describe('promise monads', function() {

        const promise = fp.Monads.promise;

        monadsHelper(promise);

        it('should return a promise when invoke method then include then, catch, resolve, reject', function() {

            assert.equal(true, promise().then(v => v + 1).is_promise);
            assert.equal(true, promise().catch(v => v + 1).is_promise);
            assert.equal(true, promise().resolve(10).is_promise);
            assert.equal(true, promise().reject('Ajax failed!').is_promise);

            assert.equal(13, promise().then(v => v + 1).then(v => v + 2).resolve(10).bind(v => v));
            assert.equal('Ajax failed! CATCH YOU', promise().then(v => v + 1).catch(v => v + ' CATCH YOU').reject('Ajax failed!').bind(v => v));
        });
    });
});
