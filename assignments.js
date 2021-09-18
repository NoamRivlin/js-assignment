const country = 'israel'
let population = 9
const continent = 'asia'
console.log(country, population, continent);
const isIsland = false
const language = 'hebrew'
console.log(typeof isIsland, typeof population, typeof country, typeof language);
let populationHalf1 = population / 2
console.log("🚀 ~ file: assignments.js ~ line 9 ~ populationHalf1", populationHalf1)
let populationHalf2 = population / 2
console.log("🚀 ~ file: assignments.js ~ line 10 ~ populationHalf2", populationHalf2)
//population = populationHalf1 + populationHalf2
let finlandPopulation = 6
console.log(population >= finlandPopulation); //question 3 answer
let averagePopulation = 33
console.log(population <= averagePopulation); //question 4 answer

/*question 5 answer
const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language
console.log(description);

//question strings and template literal answer leon 
/*const descriptionRe = `${country} is in ${continent}, and its ${population} million people speak ${language}`
console.log(descriptionRe)


//question strings and template literal my answer 
const description = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;
console.log(description);

//Taking Decisions: if / else Statements - contients  
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${(33 - population)} million below average `);
}
*/

//BMI questions:


const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;
const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight)
console.log('markBMI is - ' + markBMI);

console.log('john BMI is - ' + johnBMI );
const markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI);
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
}



/*const markMass = 95;
const markHeight = 1.88;
const markBMI = markMass / (markHeight * markHeight);
console.log(`Mark's BMI is - ` + markBMI);


const johnMass = 85;
const johnHeight = 1.76;
const johnBMI = johnMass / (johnHeight * johnHeight)
console.log(`John's BMI is -`  + johnBMI );
const markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI);
*/
