//challenge #6
function calcTip(bill) {
    let tip = bill >= 50 && bill <= 300;
    tip ? tip = (bill * 15) / 100 : tip = (bill * 20) / 100;
    return tip;
}

console.log(calcTip(100));
const bills = [125, 555, 44];
console.log(bills);
const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
];
console.log(tips);
const total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];
console.log(total);
