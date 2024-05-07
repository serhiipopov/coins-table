import { CoinTable } from '@/components/CoinTable'

const coins = [{ name: 'BTC' }, { name: 'ETH' }, { name: 'ZBCN' }]
const Portfolio = () => {
  return (
    <div className='p-12'>
      <CoinTable coins={coins} />
    </div>
  )
}

export default Portfolio
