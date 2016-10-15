/*
 * @Author: deyuhua
 * @Date: Sat Oct 15 16:25:07 2016
 * @Last modified by: deyuhua
 * @Last modified time: Sat Oct 15 16:25:07 2016
 * @Email: deyuhua@gmail.com
 * @File Path: /home/deyuhua/hobby/fp/monods/promise.js
 * @File Name: promise.js
 */

'use strict';

import MONADS from './monads';

function helper(that, result, container, state) {

    let _monads = that.chain(() => result);

    while(that[container].length) {
        _monads = _monads.chain(that[container].pop());
    }

    _monads.state = state;
    return _monads;
}

function isFunction(func) {

    return typeof func === 'function';
}

export default MONADS (function pormiseModifer(monads, value) {

    monads.is_promise = true;
    monads.state = 'pending';
    monads.keeper = [];
    monads.refuser = [];

    monads.then = function(onFulfilled, onRejected) {

        let _monads;

        switch(this.state) {
        case 'pending':
            _monads = this.chain(() => value);

            isFunction(onFulfilled) && _monads.keeper.push(onFulfilled);
            isFunction(onRejected) && _monads.refuser.push(onRejected);

            _monads.keeper = _monads.keeper.concat(this.keeper);
            _monads.refuser = _monads.refuser.concat(this.refuser);
            break;

        case 'fulfilled':

            _monads = this.chain(isFunction(onFulfilled) ? onFulfilled : v => v);
            break;

        case 'rejected':

            _monads = this.chain(isFunction(onRejected) ? onRejected : v => v);
            break;

        default:
            throw new Error('Undefined state of promise!');
        }

        _monads.state = this.state;
        return _monads;

    };

    monads.catch = function(onRejected) {

        return this.then(null, onRejected);
    };

    monads.resolve = function(result) {

        if (this.state !== 'pending') {
            throw new Error('Promise can\'t resolve more than once!');
        }

        return helper(this, result, 'keeper', 'fulfilled');
    };

    monads.reject = function(reason) {

        if (this.state !== 'pending') {
            throw new Error('Promise can\'t reject more than once!');
        }

        return helper(this, reason, 'refuser', 'refjected');
    };

});
