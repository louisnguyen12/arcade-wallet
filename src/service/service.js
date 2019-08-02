import web3 from 'web3';


const Web3 = new web3('http://rpc.testnet.nexty.io:8545');

export const createAccount = () => new Promise((resolve, reject)=>{
    try {
        var account = Web3.eth.accounts.create();
        console.log(account)
        resolve (account)
    } catch (error) {
        reject (error)
    }
})

