import { Button, PortfolioItem, SidebarProps } from '@/components'
import { Strings } from '@/constants'

export const Sidebar = ({
  portfolios,
  handleModal,
  handleDeletePortfolio,
}: SidebarProps) => {
  return (
    <div className='fixed left-0 h-[calc(100vh-2rem)] w-full max-w-64 px-4'>
      <Button className='mb-2' onClick={handleModal}>
        <span>{Strings.addPortfolio}</span>
      </Button>

      <div className='my-2 border-px' />
      <p className='py-4 text-center font-bold text-blu-dark'>
        {Strings.myPortfolios}
      </p>
      <ul className='pt-3'>
        {portfolios.map((portfolio, index) => (
          <li key={index + 1} className='pb-2'>
            <PortfolioItem
              name={portfolio.name}
              handleDeletePortfolio={() => {
                handleDeletePortfolio(portfolio.id)
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
