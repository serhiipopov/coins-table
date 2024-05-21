'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
} from '@firebase/firestore'

import {
  Button,
  AddCoinForm,
  Sidebar,
  AddPortfolioForm,
  CoinsTable,
} from '@/components'
import { FirebasePath, Strings } from '@/constants'
import { useModal } from '@/context'
import db from '../../../lib/firestore'

const initialCoins = [
  {
    name: 'ZBC 1',
    purchasePrice: '0.30',
    sellingPrice: '1',
    averagePrice: '',
    reasonForPurchase:
      "I've watched somebody on youtube and he said it be 2 dollars",
    reasonForSale: '',
  },
  {
    name: 'ZBC 2',
    purchasePrice: '0.56',
    sellingPrice: '3',
    averagePrice: '',
    reasonForPurchase: "I've watched somebody",
    reasonForSale: '',
  },
  {
    name: 'ZBC 3',
    purchasePrice: '0.20',
    sellingPrice: '2',
    averagePrice: '',
    reasonForPurchase:
      "I've watched somebody on youtube and he said it be 2 dollars I've watched somebody on youtube and he said it be 2 dollars",
    reasonForSale: '',
  },
]

const Portfolio = () => {
  const { openModal } = useModal()

  const [coins, setCoins] = useState<DocumentData[]>([])
  const [portfolios, setPortfolios] = useState<DocumentData[]>([])

  // useEffect(() => {
  //   const fetchCoins = async () => {
  //     const querySnapshot = await getDocs(collection(db, FirebasePath.coins))
  //     const coinsData = querySnapshot.docs.map(doc => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }))
  //
  //     setCoins(coinsData)
  //   }
  //
  //   fetchCoins()
  // }, [coins])

  useEffect(() => {
    const fetchPortfolios = async () => {
      const querySnapshot = await getDocs(
        collection(db, FirebasePath.portfolios),
      )
      const portfoliosData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))

      setPortfolios(portfoliosData)
    }

    fetchPortfolios()
  }, [portfolios])

  const argAddCoin = {
    content: <AddCoinForm />,
  }

  const handleModalAddCoin = useCallback(() => {
    openModal(argAddCoin)
      .then(() => {})
      .catch(() => {})
  }, [openModal])

  const argAddPortfolio = {
    content: <AddPortfolioForm />,
  }

  const handleModalAddPortfolio = useCallback(() => {
    openModal(argAddPortfolio)
      .then(() => {})
      .catch(() => {})
  }, [openModal])

  const handleDeletePortfolio = async (portfolioId: string) => {
    try {
      await deleteDoc(doc(db, `${FirebasePath.portfolios}/${portfolioId}`))
    } catch (error) {
      console.error('Error removing document: ', error)
    }
  }

  const handleDeleteCoin = async (coinId: string) => {
    try {
      await deleteDoc(doc(db, `${FirebasePath.coins}/${coinId}`))
    } catch (error) {
      console.error('Error removing document: ', error)
    }
  }

  return (
    <div className='ml-60 flex flex-col place-items-end p-12'>
      <Sidebar
        portfolios={portfolios}
        handleModal={handleModalAddPortfolio}
        handleDeletePortfolio={handleDeletePortfolio}
      />

      <Button className='mb-4 block' onClick={handleModalAddCoin}>
        <span>{Strings.addCoin}</span>
      </Button>

      <CoinsTable coins={initialCoins} handleDeleteCoin={handleDeleteCoin} />
    </div>
  )
}

export default Portfolio
