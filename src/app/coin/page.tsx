import { Strings, Urls } from '@/constants'
import { Breadcrumb } from '@/components'

export default function Coin() {
  return (
    <main className='flex min-h-screen flex-col px-24'>
      <div className='pt-4'>
        <Breadcrumb backRoute={Urls.PORTFOLIO} backText={Strings.portfolios} />
      </div>
      Coin
    </main>
  )
}
