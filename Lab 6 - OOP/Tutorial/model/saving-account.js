import BankAccount from "./bank-account.js";

export default class SavingAccount extends BankAccount {
    constructor(balance, minBalance) {
        super(balance);
        this.minBalance = minBalance
    }

    distributeBenefit(benefitPercentage) {
        this.balance += this.balance * benefitPercentage
    }

    toString() {
        return super.toString() + ` Min Balance : ${this.minBalance}`
    }
}