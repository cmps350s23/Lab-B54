import BankAccount from "./bank-account.js";

export default class CurrentAccount extends BankAccount {
    constructor(balance, monthlyFee) {
        super(balance);
        this.monthlyFee = monthlyFee
    }

    deductFees() {
        this.withdraw(this.monthlyFee)
    }

    toString() {
        return super.toString() + ` Monthly Fee : ${this.monthlyFee}`
    }
}