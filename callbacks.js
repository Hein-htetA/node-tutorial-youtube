console.log('first task');
setTimeout(() => {
    console.log('second task');
}, 3000);
console.log('1 next task');
console.log('2 next task');

let sum = 0;

for (let i = 0; i <= 500000; i++) {
    sum = sum + i;
}

console.log(sum);

setTimeout(() => {
    console.log('third task');
}, 0);

console.log('3 next task');
console.log('4 next task');