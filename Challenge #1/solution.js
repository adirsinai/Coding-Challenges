//challenge #1
const markHeight = 1.69;
const markWeight = 85;
const markBmi = markWeight / (markHeight * markHeight);
const johnHeight = 1.95;
const johnWeight = 92;
const johnBmi = johnWeight / (johnHeight * johnHeight);
const markHigherBmi = markBmi > johnBmi;

console.log(markBmi, johnBmi, markHigherBmi);
