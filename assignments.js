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

//question 5 answer
const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language
console.log(description);

//question strings and template literal answer leon 
/*const descriptionRe = `${country} is in ${continent}, and its ${population} million people speak ${language}`
console.log(descriptionRe)
*/

//question strings and template literal my answer 




/*const markMass = 78;
const markHeight = 1.69;
const markBMI = markMass / (markHeight * markHeight);
console.log('markBMI is - ' + markBMI);


const johnMass = 92;
const johnHeight = 1.95;
const johnBMI = johnMass / (johnHeight * johnHeight)
console.log('john BMI is - ' + johnBMI );
const markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI);
*/



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
