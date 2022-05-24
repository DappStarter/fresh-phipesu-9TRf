require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space strike crouch place arrow inflict praise army genuine'; 
let testAccounts = [
"0x9305f53624b723e783f06c606a3195a44804392f763e8bf2b9a35af99dcd6e00",
"0x145224905c9732089e30c5ffe44709eb76a1e3f432acd1793141a913bed2ee0d",
"0x2d0cb6a225262d58c8f6fd66e5c5eb8e0ce73ab54f263698699ba881f943b02e",
"0x32b3ad587940af195ea9819d36e70f17f8280de35d1d41593c41262688c74d5c",
"0xccf28a00fc78b3f85e502f270eea473a7b43b632ebf510aa04f3543e35cc8f08",
"0xc926cc949c971bc1161a6a6760353e1b4a17598fb3574cc9d087a233e50970a9",
"0xb408aed476c4acc8f25cfecc3e6628189a91f85efdc6036b8bbe8b4044b69c85",
"0x7eab63c9028482329bf801ca01cade65491c102407fae25a45d79ee5f769dd2a",
"0xa646640d050b71b570593427ec7ff5efa166b47d0db11b13d358d0cf75d9c440",
"0x58a49e70aeb7147eb457815b824a2dd3fa5a0b6f7bc32b7d7ab4e2e4ed439111"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

