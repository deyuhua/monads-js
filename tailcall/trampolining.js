/*
 * @Author: deyuhua
 * @Date: Sun Oct 16 10:09:55 2016
 * @Last modified by: deyuhua
 * @Last modified time: Sun Oct 16 10:09:55 2016
 * @Email: deyuhua@gmail.com
 * @File Path: /home/deyuhua/hobby/fp/tailcall/trampolining.js
 * @File Name: trampolining.js
*/

'use strict';

export default function trampolining (f) {

    while(f && typeof f === 'function') {
        f = f.apply(f.context, f.args);
    }

    return f;
}
