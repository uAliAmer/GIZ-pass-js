function AscSort(sortedArr) {
    for (const number in sortedArr) {
        for (let j = 0; j < sortedArr.length - 1; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                let temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1]
                sortedArr[j + 1] = temp;
            }
        }
    }
}
const fs = require('fs')
fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    arrayOfNumbers = data.split(',');
    AscSort(arrayOfNumbers);
    fs.writeFileSync('output.txt', arrayOfNumbers.toString());
})