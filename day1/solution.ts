import * as fs from 'fs';
let input = fs.readFileSync('.\\day1\\input.txt', 'utf8');


let max: number = 0;
input.split("\n").reduce((acc, val) => {
    if (val && !val.trim()) {
        max = Math.max(max, +acc);
        return 0;
    } else {
        return +acc + +val;
    }
}, 0);

console.log(max);

