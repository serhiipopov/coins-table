export interface CoinsTableProps {
  coins: any[]
  handleDeleteCoin: (id: string) => void
}

export enum DirectionSort {
  ASCENDING = 'ascending',
  DESCENDING = 'descending',
}

export enum CoinPrice {
  PURCHASE_PRICE = 'purchasePrice',
  SELLING_PRICE = 'sellingPrice',
  AVERAGE_PRICE = 'averagePrice',
}
