
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';


const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); 

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }
    
    list.render(doc, type.value, 'end');
});

// tuples

// the below array can be reassigned different types at different indexes
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

// tuple explicitly determines which type each index of the array is
let tup: [string, number, boolean] = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 30;
// below won't work because index of 0 is a string, not a number
// tup[0] = 25;

let student: [string, number]; 
student = ['chun-li', 223434];
// below won't work because string is first, number is second
// student = [234324234, 'ken'];
