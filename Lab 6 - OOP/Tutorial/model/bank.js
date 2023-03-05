export default class Bank {
    static count = 0
    constructor(accounts) {
        this.accounts = accounts;
        this._unknown = 123
    }

    addAccount(account) {
        this.accounts.push(account)
        Bank.count++;

    }

    getAccount(accountNo) {
        return this.accounts.find(account => account.accountNo === accountNo)
    }

    deleteAccount(accountNo) {
        const accountIndex = this
            .accounts
            .findIndex(account => account.accountNo == accountNo)
        this.accounts.splice(accountIndex, 1)
    }
    averageBalance() {
        const sum = this.accounts.reduce((acc, curr) => acc + curr.balance, 0)
        return sum / this.accounts.length
    }

    serialize() {
        return JSON.stringify(this.accounts)
    }

    deserialize(accountsJSON) {
        return JSON.parse(accountsJSON)
    }

}

// const acc = 0

// for (const curr of accounts) {
//     acc += curr.balance
// }

