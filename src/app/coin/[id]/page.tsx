import { notFound } from 'next/navigation'
import { Breadcrumb } from '@/components'
import { Strings, Urls } from '@/constants'

interface CoinItemProps {
  params: { id: string }
}

export default function CoinItem({ params }: CoinItemProps) {
  const coinId = Number(params.id)

  if (isNaN(coinId)) {
    notFound()
  }

  return (
    <main className='flex min-h-screen flex-col px-24'>
      <div className='pt-4'>
        <Breadcrumb backRoute={Urls.PORTFOLIO} backText={Strings.portfolios} />
      </div>
      <div className='flexx place-content-center'>{`Coin Item ${coinId}`}</div>
    </main>
  )
}
