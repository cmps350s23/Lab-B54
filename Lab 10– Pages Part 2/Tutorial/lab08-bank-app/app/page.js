import { Inter } from 'next/font/google'
import AccountsTable from './accounts/AccountsTable'
import accountsRepo from './api/accounts/accounts-repo'

const inter = Inter({ subsets: ['latin'] })


export default async function Home() {
  const accounts = await accountsRepo.getAccounts()

  return (
    <div>
      <main id="main">
        <label htmlFor="acctType"> Account Type</label>
        <select id="acctType" className="dropdown">
          <option value="All">All</option>
          <option value="Saving">Saving</option>
          <option value="Current">Current</option>
        </select>
        <AccountsTable initialAccounts={accounts}></AccountsTable>
      </main>
    </div>
  )
}
