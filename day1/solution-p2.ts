import * as fs from 'fs';
let input = fs.readFileSync('.\\day1\\input.txt', 'utf8');


let allValues: number[] = [];
input.split("\n").reduce((acc, val) => {
    if (val && !val.trim()) {
        allValues.push(acc);
        return 0;
    } else {
        return +acc + +val;
    }
}, 0);

allValues.sort((a,b) => b - a);
console.log(allValues[0] + allValues[1] + allValues[2]);

