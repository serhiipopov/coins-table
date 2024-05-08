import { Strings } from '@/constants'
import { CoinTableProps } from '@/components'

export const CoinTable = ({ coins }: CoinTableProps) => {
  return (
    <table className='coin-table'>
      <thead>
        <tr>
          <th className='text-primary-dark'>{Strings.name}</th>
          <th className='text-primary-dark'>{Strings.purchasePrice}</th>
          <th className='text-primary-dark'>{Strings.sellingPrice}</th>
          <th className='text-primary-dark'>{Strings.averagePrice}</th>
          <th className='text-primary-dark'>{Strings.reasonForPurchase}</th>
          <th className='text-primary-dark'>{Strings.reasonForSale}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {coins.length > 0 ? (
          coins.map((item, i) => (
            <tr key={i}>
              <td className='text-primary-dark'>{item.name}</td>
              <td className='text-primary-dark'>{item.purchasePrice}</td>
              <td className='text-primary-dark'>{item.sellingPrice}</td>
              <td className='text-primary-dark'>{item.averagePrice}</td>
              <td className='text-primary-dark'>{item.reasonForPurchase}</td>
              <td className='text-primary-dark'>{item.reasonForSale}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6}>
              <span>No results</span>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
