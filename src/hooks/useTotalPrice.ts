import { useMemo } from 'react'

export const useTotalPrice = (coins: any[], price: string) => {
  const totalPrice = useMemo(() => {
    return coins.reduce((acc, coin) => {
      return acc + (Number(coin[price]) || 0)
    }, 0)
  }, [coins, price])

  return totalPrice
}
