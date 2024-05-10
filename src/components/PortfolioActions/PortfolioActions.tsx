import { ItemAction } from '@/components'
import { PortfolioActionsProps } from './PortfolioActions.types'
import { Edit, Trash } from '@/components/Icons'
import { Strings } from '@/constants'

export const PortfolioActions = ({}: PortfolioActionsProps) => {
  return (
    <div className='flex w-full flex-col gap-2'>
      <ItemAction icon={<Edit width={18} />} text={Strings.editPortfolio} />
      <ItemAction icon={<Trash width={18} />} text={Strings.deletePortfolio} />
    </div>
  )
}
