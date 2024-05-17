import { IconButton, ItemActions, Popover } from '@/components'
import { MoreVertical } from '@/components/UI/Icons'
import { PortfolioItemProps } from './PortfolioItem.types'
import { Strings } from '@/constants'

export const PortfolioItem = ({
  name,
  handleDeletePortfolio,
}: PortfolioItemProps) => {
  return (
    <div className='flex items-center justify-between rounded-xl px-3 py-2 duration-150 hover:cursor-pointer hover:bg-ext-light'>
      <p className='text-sm font-bold text-blu-dark'>{name}</p>
      <div>
        <Popover
          content={
            <ItemActions
              firstText={Strings.editPortfolio}
              secondText={Strings.deletePortfolio}
              handleDelete={handleDeletePortfolio}
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
