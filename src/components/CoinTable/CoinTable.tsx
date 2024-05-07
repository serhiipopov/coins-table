import { CoinTableProps } from './CoinTable.types'
import { Strings } from '@/constants'

export const CoinTable = ({ coins }: CoinTableProps) => {
  return (
    <table className='coin-table'>
      <thead>
        <tr>
          <th>{Strings.name}</th>
          <th>{Strings.purchasePrice}</th>
          <th>{Strings.sellingPrice}</th>
          <th>{Strings.reasonForPurchase}</th>
          <th>{Strings.reasonForSale}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {coins.length > 0 ? (
          coins.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>
              <span>No results</span>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
