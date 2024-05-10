'use client'

import { useCallback, useEffect, useState } from 'react'
import { collection, DocumentData, getDocs } from '@firebase/firestore'

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

const Portfolio = () => {
  const { openModal } = useModal()

  const [coins, setCoins] = useState<DocumentData[]>([])
  const [portfolios, setPortfolios] = useState<DocumentData[]>([])

  useEffect(() => {
    const fetchCoins = async () => {
      const querySnapshot = await getDocs(collection(db, FirebasePath.coins))
      const coinsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))

      setCoins(coinsData)
    }

    fetchCoins()
  }, [])

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
  }, [])

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

  return (
    <div className='ml-60 flex flex-col place-items-end p-12'>
      <Sidebar portfolios={portfolios} handleModal={handleModalAddPortfolio} />

      <Button className='mb-4 block' onClick={handleModalAddCoin}>
        <span>{Strings.addCoin}</span>
      </Button>

      <CoinsTable coins={coins} />
    </div>
  )
}

export default Portfolio
