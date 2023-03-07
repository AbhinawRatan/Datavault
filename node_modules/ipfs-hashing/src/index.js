//The actual hash function in nodeJs:
const { encode } = require('bs58');
const { createHash } = require('crypto');

module.exports = function ipfsHash (data) {
    const digest = createHash('sha256').update(data).digest();
    const digestSize = Buffer.from(digest.byteLength.toString(16), 'hex');
    const hashFunction = Buffer.from('12', 'hex');
    const combined = Buffer.concat([hashFunction, digestSize, digest]);
    const multihash = encode(combined);
    return multihash.toString();
};
