// const {readFile, writeFile} = require('fs');
// console.log('start');
// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     const first = result;
//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         const second = result;
//         writeFile('./content/result-async1.txt', 
//         `Here is the result : ${first}, ${second}`,
//         (err, result) => {
//             if(err) {
//                 console.log(err);
//                 return;
//             }
//             console.log('done with this task');
//         });
//     })
// })
// console.log('starting next task');

const fs = require('fs');
console.log('start');
const promise1 = fs.promises.readFile('./content/first.txt', 'utf8');
const promise2 = fs.promises.readFile('./content/second.txt', 'utf8');
console.log('before function');
async function writeToResult() {
    try {
        const data = await Promise.all([promise1, promise2]);
        console.log(data);
        fs.promises.writeFile('./content/result-async-promise1.txt',
        data.join('-----'));
    } catch {
        console.log("Error");
    }
}
console.log('before invoking');
writeToResult();
console.log('Task complete');