# ipfs-hashing

`
npm i ipfs-hashing
`

This hashing method implement multihash which use in **ipfs block put**. To retrieve data with the hash, you need to  use **ipfs block get**.

```js
'/api/v0/block/put'
'/api/v0/block/get?arg=${hash}'
```

using ipfs is really convenient for store and retrieve data.
Whenever you upload data to ipfs, you will receive a hash string of that data.

However, if you want to avoid uploading the data that has the same content as another file, you may want to know the hash of the data before uploading it.

## example
```javascript
const ipfsHash = require('ipfs-hashing');

console.log(ipfsHash('Hello world'));
//QmV8cfu6n4NT5xRr2AHdKxFMTZEJrA44qgrBCr739BN9Wb

const data = new Uint8Array(128);
for (let i = 0; i < data.length; i++) {
    data[i] = i;
}
console.log(ipfsHash(data));
//QmT8HiHg7pss36xjAjAV6HFM88oTemMbhUpi18ne9QeNJY

console.log(ipfsHash({
    name: 'Bob',
    age: 25,
    data: data,
}));
//Qmd2xB49dZk4frhTAUPdyvvSvxedMHamKUGYwnrPXcF9aX
```