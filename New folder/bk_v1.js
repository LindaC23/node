// Linda Chen, Mr. Irimina Cybersecurity Periods 9&10 Even
const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(index, timestamp, data, previousHash=""){

        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = calculateHash();
    }
    calculateHash()
    {
        return SHA256(this.index+this.previousHash+this.timestamp+JSON.stringify(this.data)).toString();
    }
}
//Enter "npm install --save crypto-js" into the terminal

class Blockchain{
    constructor(){
        this.chain=[];
    }
    createGenesisBlock(){
        return new Block(0, "03/01/2009", "Genesis  Block", "0");
    }
}
