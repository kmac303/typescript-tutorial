// interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'shawn', 
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    }
};

const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name)
}

greetPerson(me);

console.log(me);

import { Invoice } from './classes/invoice.js'

const invOne = new Invoice('kevin', 'work on the new website', 300);
const invTwo = new Invoice('andrea', 'work on the hair website', 200);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})

// invOne.client = 'yoshi';
// invTwo.amount = 400;

// console.log(invOne, invTwo);

// console.log(invoices);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); 

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
})
