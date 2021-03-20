// Modul - "коробка" с методами и функциями которыми можно пользоваться с наружи этого модуля
/* import {config, myFunction, u} from './module1';
console.log(config);
console.log(myFunction);
console.log(u);
myFunction(); */

import * as mod1 from './module'; // если необходимо импортировать все одним разом.
import Product from './moduleDef';


console.log(mod1.config);
console.log(mod1.myFunction);
console.log(mod1.u);
mod1.myFunction();
console.log(new Product('Apple'));

import getData from './module';
