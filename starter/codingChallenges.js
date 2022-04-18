// BMI = mass / height ** 2

// data test 1
// const markMass = 78;
// const markHeight = 1.69;
// const markBMI = markMass / markHeight ** 2;
// console.log("🚀 ~ file: codingChallenges.js ~ line 5 ~ markBMI", markBMI);

// const johnMass = 92;
// const johnHeight = 1.95;
// const johnBMI = johnMass / johnHeight ** 2;
// console.log("🚀 ~ file: codingChallenges.js ~ line 8 ~ johnBMI", johnBMI);

// const markHigherBMI = markBMI > johnBMI
// console.log(markHigherBMI);

// coding challange 2

// // data test 2
// const markMass = 95;
// const markHeight = 1.88;
// let markBMI = markMass / markHeight ** 2;
// console.log("🚀 ~ file: codingChallenges.js ~ line 5 ~ markBMI", markBMI);

// const johnMass = 85;
// const johnHeight = 1.76;
// let johnBMI = johnMass / johnHeight ** 2;
// console.log("🚀 ~ file: codingChallenges.js ~ line 8 ~ johnBMI", johnBMI);

// const markHigherBMI = markBMI > johnBMI
// console.log(markHigherBMI);
// markBMI = 26.8
// johnBMI = 27.4

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI(${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//     console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`);
// }

// coding challange 3
// const dolphinsScore = 0 + 0 + 90;
// const dolphinAverage = (dolphinsScore) / 3;
// console.log(dolphinAverage);


// const koalasScore = 0 + 0 + 90;
// const koalasAverage = (koalasScore) / 3;
// console.log(koalasAverage);


// if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
//     console.log('Dolphins wins!');
// } else if (koalasScore > dolphinsScore && koalasScore >= 100) {
//     console.log('Koalas wins!');
// } else if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >= 100) {
//     console.log('DRAW!');
// } else {
//     console.log('No one wins!');
// }


// if (dolphinAverage > koalasAverage) {
//     console.log('Dolphins wins!');
// } else if (koalasAverage > dolphinAverage) {
//     console.log('Koalas wins!');
// }

// Coding Challenge #4
const bill = 300;
const tipSum = bill >= 50 && bill <= 300 ? `${bill * 0.15}` : `${bill * 0.2}`;
const tipPercent = bill >= 50 && bill <= 300 ? '15%' : '20%'
console.log(`The bill was ${bill}, so the tip percent is ${tipPercent}, \n\ thus the tip is ${tipSum}, and the total value = ${Number(bill) + Number(tipSum)}`);

// let tip2
// if (bill > 50 && bill < 300) {
//     tip2 = bill * 0.15
// } else {
//     tip2 = bill * 0.2
// }
// console.log(tip2);