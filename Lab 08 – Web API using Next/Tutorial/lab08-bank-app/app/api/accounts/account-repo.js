import fs from 'fs-extra'
export default class AccountRepo {
    constructor() {
        this.filepath = 'app/data/accounts.json'
    }
    async getAccounts(type) {
        const accounts = await fs.readJSON(this.filepath)
        if (type)
            return accounts
                .filter(a => a.acctType.toLowerCase() === type.toLowerCase())
        else
            return accounts
    }
}