/*
 * @Author: deyuhua
 * @Date: Sat Oct 15 15:32:39 2016
 * @Last modified by: deyuhua
 * @Last modified time: Sat Oct 15 15:32:39 2016
 * @Email: deyuhua@gmail.com
 * @File Path: /home/deyuhua/hobby/fp/monods/list.js
 * @File Name: list.js
*/

'use strict';

import MONADS from './monads';

export default MONADS(function(monads, value) {

    monads.is_lazy = true;
    monads.bind = function (func, ...rest) {

        return (function* () {

            if (!Array.isArray(value)) {

                return yield func(value, ...rest);
            }

            for (const item of value) {
                yield func(item, ...rest);
            }
        }());
    };
});
