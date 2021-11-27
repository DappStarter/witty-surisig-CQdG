require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture strong rival situate common harvest define army gate'; 
let testAccounts = [
"0xbf65f3f19c2b04be17bf33f9142d41e4844bae973e464f5baf40016dcddb8ca9",
"0xa5de9f4adf8fc8af0a768c2284b3b52eb9f9796e6b0b723f83da5115efef39a3",
"0x9313309a2b9fbd75651a45772d2415521caf7dd7de6b5c702f9e697d4d7d6f3f",
"0x9ef9a927b48c80d2634584065a9a7d8de9ae7a4294ac5ea55d631c7f2bf199c1",
"0xfc3dba5a659b750b3dd46cc7dfc427c5a458383ab5723f1ad8a280a15e9b05f1",
"0xacb21ef566306ff43cba09e460fcada3b21fe1fc755ddb08a9c2d7e8b4e58fc0",
"0xfd9dc73e3fe2351646b8419bf92d9bbc1005b537b437f1d666d851818ec545ce",
"0x7240e3c39b15d13cc1819d971d8785e92aa3a6a2b9b24d93029e53ace8ab4e68",
"0xe25c02e343b9e3a56190830dc2cc41ba3762fd04fb55d2f3f5e1bf5e730e6c3e",
"0xcc31a4c3087c11e48fb391a071cb98097488ec78ab8dfedb0c2f7373fcbb2260"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


