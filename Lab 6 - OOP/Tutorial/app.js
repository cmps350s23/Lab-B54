import Bank from "./model/bank.js";
import CurrentAccount from "./model/current-account.js";
import SavingAccount from "./model/saving-account.js";


const s1 = new SavingAccount(1000, 500)
const s2 = new SavingAccount(200, 1500)
const s3 = new SavingAccount(300, 2500)
const c1 = new CurrentAccount(4000, 300)
const c2 = new CurrentAccount(14000, 430)
const c3 = new CurrentAccount(42000, 130)


const bank = new Bank([s1, s2, c1, c2])
bank.addAccount(s3)
bank.addAccount(c3)
console.log(bank._unknown);

console.log('How many ', Bank.count);

// console.log(bank.accounts);
// bank.deleteAccount(s1.accountNo)

// console.log(bank.accounts);
// console.log('Average ' + bank.averageBalance());