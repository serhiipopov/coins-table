import { Button, Input } from '@/components'
import { Strings } from '@/constants'

export const AddCoinForm = () => {
  return (
    <div>
      <div className='flex w-96 flex-col gap-4 rounded-lg bg-gray-100 p-6 shadow-2xl'>
        <Input label={Strings.name} />
        <Input label={Strings.purchasePrice} />
        <Input label={Strings.reasonForPurchase} />
        <Button className='block'>
          <span>{Strings.addCoin}</span>
        </Button>
      </div>
    </div>
  )
}
