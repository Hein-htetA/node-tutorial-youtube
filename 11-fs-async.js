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
// console.time('test 1');
// const fs = require('fs');
// const promise1 = fs.promises.readFile('./content/first.txt', 'utf8');
// const promise2 = fs.promises.readFile('./content/second.txt', 'utf8');
// async function writeToResult() {
//     try {
//         const data = await Promise.all([promise1, promise2]);
//         console.timeEnd('test 1')
//         await fs.promises.writeFile('./content/result-async-promise1.txt',
//         data.join('-----'));
//         console.log("Task is really complete");
        
       
//     } catch {
//         console.log("Error");
//     }
// }
// writeToResult();


console.time('test 2');
const fs = require('fs');
async function writeToResult() {
    try {
        const first = await fs.promises.readFile('./content/first.txt', 'utf8');
        const second = await fs.promises.readFile('./content/second.txt', 'utf8');
        console.timeEnd('test 2');
        await fs.promises.writeFile('./content/result-async-promise3.txt',
        `${first}---${second}`);
        console.log("Task is really complete");
        
        
    } catch {
        console.log("Error");
    }
}
writeToResult();



// const fs = require('fs');

// for (let i = 0; i <= 100000; i++) {
//     fs.writeFileSync('./content/first.txt', 'a', { flag: 'a' })
// }

// console.log('task complete');
