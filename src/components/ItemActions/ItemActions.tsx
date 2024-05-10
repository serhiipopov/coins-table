import { ItemAction } from '@/components'
import { Edit, Trash } from '@/components/Icons'
import { ItemActionsProps } from './ItemActions.types'

export const ItemActions = ({ firstText, secondText }: ItemActionsProps) => {
  return (
    <div className='flex w-full flex-col gap-2'>
      <ItemAction icon={<Edit width={18} />} text={firstText} />
      <ItemAction icon={<Trash width={18} />} text={secondText} />
    </div>
  )
}
