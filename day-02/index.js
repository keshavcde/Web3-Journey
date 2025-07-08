const {Keypair}=require("@solana/web3.js")
const keypair=Keypair.generate();
const publickey=keypair.publicKey;
const secretKey=keypair.secretKey;
console.log("the public key is "+ publickey.toBase58());
console.log("the secret key is "+ Buffer.from(secretKey).toString("hex"));