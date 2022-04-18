'use strict';
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('i')

// function
// function logger() {
//     console.log('my name is blah');
// }
// // logger();
// // logger();
// // logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);


// // Functions
// function describeCountry(country, population, capitalCity) {
//     const theCountry = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//     return theCountry;
// }
// const myCountry = describeCountry('Israel', 7, 'Jerusalem');
// console.log(myCountry);

// const countryGermany = describeCountry('Germany', 15, 'Berlin');
// console.log(countryGermany);

// const countrySpain = describeCountry('Spain', 30, 'Dunno');
// console.log(countrySpain);

// function fruitProcessor(apples, oranges) {

//     console.log(apples, oranges);

//     return `Juice with ${apples} apples and ${oranges} oranges.`;

// }
// fruitProcessor(8, 6)


// function asd(a, b) {
//     console.log('starting asd...');
//     let ab = a + b
//     return ab;
// }
// // let c = asd()

// function mySign(num) {
//     if (num > 0) {
//         return 1
//     }
//     else {
//         return -1
//     }
// }

// c = mySign(-5)
// console.log(c);
// console.log(mySign(-5));


// function moveLeft(event) {
//     let name = event.key;
//     if (name = 'ArrowLeft') console.log('moved left');
// }
// document.addEventListener('keydown', moveLeft);
// a = 2


/*LECTURE: Function Declarations vs. Expressions 
example declaration: 
function age(birthYear){
    return 2037 - birthYear;
}
const age1 = age(1991)

you can call declarations before you define it (?)

example expression:
const age = function (birthYear) {
    return 2037 - birthYear;
}
const age1 = age(1991); 

simply putting the expression in a variable...
*/

/*
const worldPopulation = 7900;


const chinaPercentageOfWorld1 = percentageOfWorld1('china', 1441);
console.log(chinaPercentageOfWorld1);

const spainPercentageOfWorld1 = percentageOfWorld1('spain', 200);
console.log(spainPercentageOfWorld1);


const narniaPercentOfWorld1 = percentageOfWorld1('Narnia', 5000);
console.log(narniaPercentOfWorld1);


function percentageOfWorld1(country, population) {
    return `${country} has ${population} million people, so it's about ${(population / worldPopulation) * 100}% of the world population.`;
}



const percentageOfWorld2 = function (country, population) {
    return `${country} has ${population} million people, so it's about ${(population / worldPopulation) * 100}% of the world population.`;
}

const chinaPercentageOfWorld2 = percentageOfWorld2('China', 1441)
console.log(chinaPercentageOfWorld2);

const spainPercentageOfWorld2 = percentageOfWorld2('spain', 200);
console.log(spainPercentageOfWorld2);


const narniaPercentOfWorld2 = percentageOfWorld2('Narnia', 5000);
console.log(narniaPercentOfWorld2);

const percentageOfWorld3 = (country, population) => {
    return `${country} has ${population} million people, so it's about ${(population / worldPopulation) * 100}% of the world population.`;
}


const chinaPercentageOfWorld3 = percentageOfWorld2('China', 1441)
console.log(chinaPercentageOfWorld3);

const spainPercentageOfWorld3 = percentageOfWorld2('spain', 200);
console.log(spainPercentageOfWorld3);


const narniaPercentOfWorld3 = percentageOfWorld2('Narnia', 5000);
console.log(narniaPercentOfWorld3);*/


const worldPopulation = 7900;

const percentageOfWorld1 = function (population) {
    return (population / worldPopulation) * 100;
}


const describePopulation = function (country, population) {
    const calPercent = percentageOfWorld1(population);
    return `${country} has ${population} million people, so it's about ${calPercent.toFixed(2)}% of the world population.`;
}



const narniaPercentOfWorld1 = describePopulation('Narnia', 5000);
console.log(narniaPercentOfWorld1);

