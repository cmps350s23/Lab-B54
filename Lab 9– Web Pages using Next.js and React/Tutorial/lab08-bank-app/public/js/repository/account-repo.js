const baseUrl = '/api/accounts'

class AccountRepo {
    //returns all the accounts depending on the type the user selected
    async getAccounts(acctType) {
        const response = await fetch(`/api/accounts?type=${acctType}`)
        return await response.json()
    }

    async deleteAccount(accountNo) {
        const response = await fetch(`/api/accounts/${accountNo}`, {
            method: 'DELETE'
        })
        return response.json()
    }

    async addAccount(account) {
        const response = await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(account),
            headers: { 'Content-Type': 'application/json' }
        })

        return response.json()
    }

    async updateAccount(account) {
        const response = await fetch(`${baseUrl}/${account.accountNo}`, {
            method: 'PUT',
            body: JSON.stringify(account),
            headers: { 'Content-Type': 'application/json' }
        })
        response.json()
    }

    async addTrans(trans) {
        const response = await fetch(`${baseUrl}/${account.accountNo}/trans`, {
            method: 'POST',
            body: JSON.stringify(trans),
            headers: { 'Content-Type': 'application/json' }
        })
        return response.json()
    }
}

export default new AccountRepo()