// sometimes specifying the type can get long winded like below
// const logDetails = (uid: string | number, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// }

// const greet = (user: {name: string, uid: string | number}) => {
//     console.log(`${user.name} says hello`);
// }

type StringorNum = string | number;
type objWithName = { name: string, uid: StringorNum};

const logDetails = (uid: StringorNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}

const greetAgain = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}
