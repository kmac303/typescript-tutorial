"use strict";
// sometimes specifying the type can get long winded like below
// const logDetails = (uid: string | number, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// }
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
const greetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
