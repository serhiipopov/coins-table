import { ItemActionProps } from './ItemAction.types'

export const ItemAction = ({ icon, text }: ItemActionProps) => {
  return (
    <div className='flex items-center gap-2 rounded-lg p-1 hover:bg-grey-pale'>
      {icon}
      <span className='text-sm text-blu-dark'>{text}</span>
    </div>
  )
}
