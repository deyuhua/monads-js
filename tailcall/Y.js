/*
 * @Author: deyuhua
 * @Date: Sun Oct 16 11:29:17 2016
 * @Last modified by: deyuhua
 * @Last modified time: Sun Oct 16 11:29:17 2016
 * @Email: deyuhua@gmail.com
 * @File Path: /home/deyuhua/hobby/fp/tailcall/Y.js
 * @File Name: Y.js
*/

'use strict';

export default function Y (F) {

    return (function(f) {

        return f(f);
    }(function(f) {

        return F(function(...rest) {
            return f(f)(rest);
        });
    }));
}
