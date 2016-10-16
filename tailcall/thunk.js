/*
 * @Author: deyuhua
 * @Date: Sun Oct 16 10:13:48 2016
 * @Last modified by: deyuhua
 * @Last modified time: Sun Oct 16 10:13:48 2016
 * @Email: deyuhua@gmail.com
 * @File Path: /home/deyuhua/hobby/fp/tailcall/thunk.js
 * @File Name: thunk.js
*/

'use strict';

export default function thunk(fn) {

    return function(...rest) {

        return function() {

            return fn.apply(null, rest);
        };
    };
}
