/*
 * @Author: deyuhua
 * @Date: Sat Oct 15 13:29:18 2016
 * @Last modified by: deyuhua
 * @Last modified time: Sat Oct 15 13:29:18 2016
 * @Email: deyuhua@gmail.com
 * @File Path: /home/deyuhua/hobby/fp/monods/index.js
 * @File Name: index.js • monods
*/

'use strict';

import MONADS from './monads';
import identity from './identity';
import maybe from './maybe';
import lazy from './lazy';
import promise from './promise';

export default {
    MONADS,
    identity,
    maybe,
    lazy,
    promise
};
