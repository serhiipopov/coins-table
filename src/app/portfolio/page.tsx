'use client'

import { useCallback, useEffect, useState } from 'react'
import { collection, DocumentData, getDocs } from '@firebase/firestore'

import { Button, CoinTable, AddCoinForm } from '@/components'
import { FirebasePath, Strings } from '@/constants'
import { useModal } from '@/context'
import db from '../../../lib/firestore'

const Portfolio = () => {
  const { openModal } = useModal()

  const [coins, setCoins] = useState<DocumentData[]>([])

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

  const args = {
    content: <AddCoinForm />,
  }

  const handleModal = useCallback(() => {
    openModal(args)
      .then(() => {})
      .catch(() => {})
  }, [openModal])

  return (
    <div className='ml-60 flex flex-col place-items-end p-12'>
      <Button className='mb-4 block' onClick={handleModal}>
        <span>{Strings.addCoin}</span>
      </Button>

      <CoinTable coins={coins} />
    </div>
  )
}

export default Portfolio
