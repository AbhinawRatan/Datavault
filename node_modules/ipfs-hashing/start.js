const ipfsHash = require('./build/ipfsHash');
console.log(ipfsHash('Hello world'));
console.log(ipfsHash('b'));

const data = new Uint8Array(128);
for (let i = 0; i < data.length; i++) {
    data[i] = i;
}
console.log(ipfsHash(data));
console.log(ipfsHash({
    name: 'Bob',
    age: 25,
    data: data,
}));
console.log(ipfsHash({
    name: 'Bob',
    age: 25,
    data: data.slice(0),
}));