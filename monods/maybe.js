/*
 * @Author: deyuhua
 * @Date: Sat Oct 15 15:00:41 2016
 * @Last modified by: deyuhua
 * @Last modified time: Sat Oct 15 15:00:41 2016
 * @Email: deyuhua@gmail.com
 * @File Path: /home/deyuhua/hobby/fp/monods/maybe.js
 * @File Name: maybe.js
*/

'use strict';

import MONADS from './monads';

export default MONADS((monads, value) => {

    if (value === undefined || value === null) {
        monads.is_null = true;
        monads.bind = function() {
            return monads;
        };
        monads.toString = function() {
            return 'Nothing';
        };
    }
});
