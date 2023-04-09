import { Inter } from 'next/font/google'
import AccountsRepo from './api/accounts/accounts-repo'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const initialAccounts = await new AccountsRepo().getAccounts()
  return (
    <div>

      <main id="main">
        <label htmlFor="acctType"> Account Type</label>
        <select id="acctType" className="dropdown">
          <option value="All">All</option>
          <option value="Saving">Saving</option>
          <option value="Current">Current</option>
        </select>
        <div id="accounts-table"></div>
      </main>
    </div>
  )
}
