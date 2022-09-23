const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);

// const filePath1 = ['/content', 'subfolder', 'test.txt'];
// const filePath11 = filePath1.join(path.sep);
// console.log(filePath11);