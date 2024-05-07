'use client'

import { Button, CoinTable, AddCoinForm } from '@/components'
import { Strings } from '@/constants'
import { useModal } from '@/context/ModalContext'
import { useCallback } from 'react'

const coins = [{ name: 'BTC' }, { name: 'ETH' }, { name: 'ZBCN' }]

const Portfolio = () => {
  const { openModal } = useModal()

  const args = {
    content: <AddCoinForm />,
  }

  const handleDialog = useCallback(() => {
    openModal(args)
      .then(() => {})
      .catch(() => {})
  }, [openModal])

  return (
    <div className='ml-60 flex flex-col place-items-end p-12'>
      <Button className='mb-4 block' onClick={handleDialog}>
        <span>{Strings.addCoin}</span>
      </Button>

      <CoinTable coins={coins} />
    </div>
  )
}

export default Portfolio
