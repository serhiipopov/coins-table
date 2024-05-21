'use client'

import { twMerge } from 'tailwind-merge'
import { useMemo, useState } from 'react'
import { Strings, Urls } from '@/constants'
import {
  CoinsTableProps,
  IconButton,
  ItemActions,
  Popover,
  MoreHorizontal,
  CoinPrice,
  DirectionSort,
  Chevron,
} from '@/components'
import { useTotalPrice } from '@/hooks'
import { useRouter } from 'next/navigation'

export const CoinsTable = ({ coins, handleDeleteCoin }: CoinsTableProps) => {
  const totalPurchasePrice = useTotalPrice(coins, CoinPrice.PURCHASE_PRICE)
  const totalSellingPrice = useTotalPrice(coins, CoinPrice.SELLING_PRICE)
  const totalAveragePrice = useTotalPrice(coins, CoinPrice.AVERAGE_PRICE)
  const [sortConfig, setSortConfig] = useState({
    key: CoinPrice.PURCHASE_PRICE,
    direction: DirectionSort.ASCENDING,
  })
  const { push } = useRouter()

  const sortedCoins = useMemo(() => {
    const sorted = [...coins]
    if (sortConfig.key) {
      sorted.sort((a, b) => {
        const aValue = a[sortConfig.key] || 0
        const bValue = b[sortConfig.key] || 0
        if (aValue < bValue) {
          return sortConfig.direction === DirectionSort.ASCENDING ? -1 : 1
        }
        if (aValue > bValue) {
          return sortConfig.direction === DirectionSort.ASCENDING ? 1 : -1
        }

        return 0
      })
    }

    return [
      ...sorted,
      {
        name: 'Total',
        purchasePrice: totalPurchasePrice,
        sellingPrice: totalSellingPrice,
        averagePrice: totalAveragePrice,
      },
    ]
  }, [sortConfig])

  const requestSort = (key: CoinPrice) => {
    let direction = DirectionSort.ASCENDING
    if (
      sortConfig.key === key &&
      sortConfig.direction === DirectionSort.ASCENDING
    ) {
      direction = DirectionSort.DESCENDING
    }
    setSortConfig({ key, direction })
  }

  const isPurchasePriceAscending =
    sortConfig.key === CoinPrice.PURCHASE_PRICE &&
    sortConfig.direction === DirectionSort.ASCENDING

  const isPurchasePriceDescending =
    sortConfig.key === CoinPrice.PURCHASE_PRICE &&
    sortConfig.direction === DirectionSort.DESCENDING

  const isSellingPriceAscending =
    sortConfig.key === CoinPrice.SELLING_PRICE &&
    sortConfig.direction === DirectionSort.ASCENDING

  const isSellingPriceDescending =
    sortConfig.key === CoinPrice.SELLING_PRICE &&
    sortConfig.direction === DirectionSort.DESCENDING

  return (
    <table className='coins-table'>
      <thead>
        <tr>
          <th className='text-blu-dark'>№</th>
          <th className='text-blu-dark'>{Strings.name}</th>
          <th
            className='text-blu-dark duration-300 hover:cursor-pointer hover:bg-ext-light'
            onClick={() => requestSort(CoinPrice.PURCHASE_PRICE)}
          >
            <div className='flex items-center gap-0.5'>
              {!isPurchasePriceAscending && !isPurchasePriceDescending && (
                <div className='w-6'></div>
              )}
              {isPurchasePriceAscending && <Chevron direction='up' />}
              {isPurchasePriceDescending && <Chevron direction='down' />}
              {Strings.purchasePrice}
            </div>
          </th>
          <th
            className='text-blu-dark duration-300 hover:cursor-pointer hover:bg-ext-light'
            onClick={() => requestSort(CoinPrice.SELLING_PRICE)}
          >
            <div className='flex items-center gap-0.5'>
              {!isSellingPriceAscending && !isSellingPriceDescending && (
                <div className='w-6'></div>
              )}
              {isSellingPriceAscending && <Chevron direction='up' />}
              {isSellingPriceDescending && <Chevron direction='down' />}
              {Strings.sellingPrice}
            </div>
          </th>
          <th className='text-blu-dark'>{Strings.averagePrice}</th>
          <th className='text-blu-dark'>{Strings.reasonForPurchase}</th>
          <th className='text-blu-dark'>{Strings.reasonForSale}</th>
          <th className='text-blu-dark'>{Strings.actions}</th>
        </tr>
      </thead>
      <tbody>
        {sortedCoins.length > 0 ? (
          sortedCoins.map((coin, i) => {
            const isLastRow = i === sortedCoins?.length - 1
            const coinNumber = i + 1

            return (
              <tr key={i}>
                {!isLastRow ? (
                  <td className='text-blu-dark'>{coinNumber}</td>
                ) : (
                  <td></td>
                )}
                {!isLastRow ? (
                  <td
                    className={twMerge(
                      'text-blu-dark duration-300 hover:cursor-pointer hover:bg-ext-light',
                    )}
                    onClick={() => `${Urls.COIN}/${coin?.id ?? coinNumber}`}
                  >
                    {coin.name}
                  </td>
                ) : (
                  <td className='font-bold text-blu-dark'>{coin.name}</td>
                )}
                <td className='text-blu-dark'>
                  {coin.purchasePrice ? `${coin.purchasePrice} $` : ''}
                </td>
                <td className='text-blu-dark'>
                  {coin.sellingPrice ? `${coin.sellingPrice} $` : ''}
                </td>
                <td className='text-blu-dark'>
                  {coin.averagePrice ? `${coin.averagePrice} $` : ''}
                </td>

                <td>
                  <Popover
                    trigger='hover'
                    content={coin.reasonForPurchase}
                    contentClassName='left-16 -top-6 min-w-56 px-4'
                  >
                    <p
                      className={twMerge(
                        'w-16 truncate text-blu-dark lg:w-24 xl:w-32 2xl:w-40',
                      )}
                    >
                      {coin.reasonForPurchase}
                    </p>
                  </Popover>
                </td>

                <td>
                  <Popover
                    trigger='hover'
                    content={coin.reasonForSale}
                    contentClassName='left-16 -top-6 min-w-56 px-4'
                  >
                    <div className={twMerge('w-36 truncate text-blu-dark')}>
                      {coin.reasonForSale}
                    </div>
                  </Popover>
                </td>

                {!isLastRow ? (
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
                ) : (
                  <td></td>
                )}
              </tr>
            )
          })
        ) : (
          <tr>
            <td colSpan={6}>
              <span>{Strings.noResults}</span>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
