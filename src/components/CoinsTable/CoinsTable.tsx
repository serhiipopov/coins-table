'use client'

import { Strings } from '@/constants'
import {
  CoinsTableProps,
  IconButton,
  ItemActions,
  Popover,
  MoreHorizontal,
} from '@/components'
import { twMerge } from 'tailwind-merge'

export const CoinsTable = ({ coins, handleDeleteCoin }: CoinsTableProps) => {
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
          coins.map((coin, i) => (
            <tr key={i} className='relative'>
              <td className='text-blu-dark'>{i + 1}</td>
              <td className='text-blu-dark'>{coin.name}</td>
              <td className='text-blu-dark'>
                {coin.purchasePrice && `${coin.purchasePrice} $`}
              </td>
              <td className='text-blu-dark'>
                {coin.sellingPrice && `${coin.sellingPrice} $`}
              </td>
              <td className='text-blu-dark'>
                {coin.averagePrice && `${coin.averagePrice} $`}
              </td>
              <td>
                <Popover
                  trigger='hover'
                  content={coin.reasonForPurchase}
                  contentClassName='left-16 -top-6 min-w-56 px-4'
                >
                  <div className={twMerge('w-24 truncate text-blu-dark')}>
                    {coin.reasonForPurchase}
                  </div>
                </Popover>
              </td>
              <td>
                <Popover
                  trigger='hover'
                  content={coin.reasonForSale}
                  contentClassName='left-16 -top-6 min-w-56 px-4'
                >
                  <div className={twMerge('w-24 truncate text-blu-dark')}>
                    {coin.reasonForSale}
                  </div>
                </Popover>
              </td>
              <td>
                <Popover
                  content={
                    <ItemActions
                      handleDelete={() => handleDeleteCoin(coin.id)}
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
