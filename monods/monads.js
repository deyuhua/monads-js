/*
 * @Author: deyuhua
 * @Date: Sat Oct 15 11:55:58 2016
 * @Last modified by: deyuhua
 * @Last modified time: Sat Oct 15 11:55:58 2016
 * @Email: deyuhua@gmail.com
 * @File Path: /home/deyuhua/hobby/fp/monods/monads.js
 * @File Name: monads.js
 */

'use strict';

export default function MONADS(modifier) {

    const prototype = Object.create(null);
    prototype.is_monads = true;

    return function unit (value) {

        Object.assign(prototype, {
            'bind': function(func, ...rest) {
                return func(value, ...rest);
            },
            'method': function(name, method) {
                prototype[name] = method;
                return unit;
            },
            'chain': function(func, ...rest) {

                const result = this.bind(func, ...rest);

                return result && result.is_monads ?
                    result :
                    unit(result);
            }
        });

        const monads = Object.create(prototype);

        if (typeof modifier === 'function') {
            modifier(monads, value);
        }

        return monads;
    };
}
