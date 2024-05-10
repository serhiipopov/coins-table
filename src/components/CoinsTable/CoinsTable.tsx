import { Strings } from '@/constants'
import { CoinsTableProps, IconButton, ItemActions, Popover } from '@/components'
import { MoreHorizontal } from '@/components/Icons'

export const CoinsTable = ({ coins }: CoinsTableProps) => {
  return (
    <table className='coins-table'>
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
              <td>
                <Popover
                  content={
                    <ItemActions
                      firstText={Strings.editCoin}
                      secondText={Strings.deleteCoin}
                    />
                  }
                  contentClassName='right-8 -top-6 w-max px-2'
                >
                  <IconButton className='transition-transform duration-300 hover:scale-125'>
                    <MoreHorizontal className='stroke-grey-secondary' />
                  </IconButton>
                </Popover>
              </td>
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
