import { Inter } from 'next/font/google'
import AccountTable from './accounts/AccountTable'
import AccountsRepo from './api/accounts/accounts-repo'


const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const initialAccounts = await new AccountsRepo().getAccounts()
  return (
    <div>

    </div>
  )
}
