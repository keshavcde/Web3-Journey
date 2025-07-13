// const {Keypair}  =require("@solana/web3.js");

// const nacl=require("tweetnacl");
// const keypair=Keypair.generate();
// const publickey=keypair.publicKey;
// const secretKey=keypair.secretKey;
// const message=new TextEncoder().encode("hello world");
// const signature=nacl.sign.detached(message,secretKey);
// const result=nacl.sign.detached.verify(
//      message,
//     signature,
   
//     keypair.publicKey.toBytes(),
// )
// console.log("isvalid",result);

const {Keypair}=require("@solana/web3.js");
const nacl=require("tweetnacl");
const keypair=Keypair.generate();
const publickey=keypair.publicKey;
const secretKey=keypair.secretKey;
const message=new TextEncoder().encode("heelo world");
const signature=nacl.sign.detached(message,secretKey);
const result=nacl.sign.detached.verify(
    message,
    signature,
    keypair.publicKey.toBytes()
)
console.log(result);