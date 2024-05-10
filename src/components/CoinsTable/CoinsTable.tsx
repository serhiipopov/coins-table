import { Strings } from '@/constants'
import { CoinsTableProps } from '@/components'

export const CoinsTable = ({ coins }: CoinsTableProps) => {
  return (
    <table className='coin-table'>
      <thead>
        <tr>
          <th className='text-blu-dark'>№</th>
          <th className='text-blu-dark'>{Strings.name}</th>
          <th className='text-blu-dark'>{Strings.purchasePrice}</th>
          <th className='text-blu-dark'>{Strings.sellingPrice}</th>
          <th className='text-blu-dark'>{Strings.averagePrice}</th>
          <th className='text-blu-dark'>{Strings.reasonForPurchase}</th>
          <th className='text-blu-dark'>{Strings.reasonForSale}</th>
          <th className='text-blu-dark'>{Strings.actions}</th>
        </tr>
      </thead>
      <tbody>
        {coins.length > 0 ? (
          coins.map((item, i) => (
            <tr key={i}>
              <td className='text-blu-dark'>{i + 1}</td>
              <td className='text-blu-dark'>{item.name}</td>
              <td className='text-blu-dark'>{item.purchasePrice}</td>
              <td className='text-blu-dark'>{item.sellingPrice}</td>
              <td className='text-blu-dark'>{item.averagePrice}</td>
              <td className='text-blu-dark'>{item.reasonForPurchase}</td>
              <td className='text-blu-dark'>{item.reasonForSale}</td>
              <td className='text-blu-dark'></td>
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
