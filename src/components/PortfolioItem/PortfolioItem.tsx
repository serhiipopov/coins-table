import { PortfolioItemProps } from './PortfolioItem.types'
import { IconButton, Popover, PortfolioActions } from '@/components'
import { MoreVertical } from '@/components/Icons'

export const PortfolioItem = ({ name }: PortfolioItemProps) => {
  return (
    <div className='flex items-center justify-between rounded-xl px-3 py-2 duration-150 hover:cursor-pointer hover:bg-ext-light'>
      <p className='font-bold text-blu-dark'>{name}</p>
      <div>
        <Popover
          content={<PortfolioActions />}
          contentClassName='left-12 -top-6 w-max px-2'
        >
          <IconButton className='transition-transform duration-300 hover:scale-125'>
            <MoreVertical className='stroke-grey-secondary' />
          </IconButton>
        </Popover>
      </div>
    </div>
  )
}
