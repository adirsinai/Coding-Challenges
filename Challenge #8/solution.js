// challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

function calcTip(bill) {
    let tip = bill >= 50 && bill <= 300;
    tip ? tip = (bill * 15) / 100 : tip = (bill * 20) / 100;
    return tip;
}

let i = 0;
while (i < bills.length) {

    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
    i++;

}
console.log(bills, tips, totals);
