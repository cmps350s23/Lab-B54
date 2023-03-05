//npm init
class BankAccount {
    constructor(balance) {
        this.accountNo = Math.floor(Math.random() * (1000))
        this.balance = balance
    }
    deposit(amount) {
        if (amount > 0) this.balance += amount;
        else console.log('Amount can not be negative');
    }

    withdraw(amount) {
        if (amount <= this.balance) this.balance -= amount;
        else console.log('You do not have enough money');
    }

    toString() {
        return `Acc No : ${this.accountNo} Balance : ${this.balance}`
    }
}

export default BankAccount



// const bankAccount = new BankAccount(1000)
// console.log(bankAccount.toString());