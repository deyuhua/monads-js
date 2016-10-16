/*
 * @Author: deyuhua
 * @Date: Sat Oct 15 15:12:19 2016
 * @Last modified by: deyuhua
 * @Last modified time: Sat Oct 15 15:12:19 2016
 * @Email: deyuhua@gmail.com
 * @File Path: /home/deyuhua/hobby/fp/monods/identity.js
 * @File Name: identity.js
*/

'use strict';

import MONADS from './monads';

export default MONADS(function(monads, value) {

    monads.is_identity = true;
});
