import { IconButton, ItemActions, Popover } from '@/components'
import { MoreVertical } from '@/components/Icons'
import { PortfolioItemProps } from './PortfolioItem.types'
import { Strings } from '@/constants'

export const PortfolioItem = ({ name }: PortfolioItemProps) => {
  return (
    <div className='hover:bg-ext-light flex items-center justify-between rounded-xl px-3 py-2 duration-150 hover:cursor-pointer'>
      <p className='text-blu-dark text-sm font-bold'>{name}</p>
      <div>
        <Popover
          content={
            <ItemActions
              firstText={Strings.editPortfolio}
              secondText={Strings.deletePortfolio}
            />
          }
          contentClassName='left-12 -top-6 w-max px-2'
        >
          <IconButton className='transition-transform duration-300 hover:scale-125'>
            <MoreVertical className='stroke-grey-secondary' width={18} />
          </IconButton>
        </Popover>
      </div>
    </div>
  )
}
