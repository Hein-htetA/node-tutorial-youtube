let local = 1;
const sayHi = (name) => {
    console.log(`Hello there ${name} ${local}`)
    local++;
};

module.exports = sayHi;
console.log(module);