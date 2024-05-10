import { Anchor, Button, PortfolioItem, SidebarProps } from '@/components'
import { Strings } from '@/constants'

export const Sidebar = ({ portfolios, handleModal }: SidebarProps) => {
  return (
    <div className='fixed left-0 h-[calc(100vh-2rem)] w-full max-w-64 px-4'>
      <Button className='mb-2' onClick={handleModal}>
        <span>{Strings.addPortfolio}</span>
      </Button>

      <div className='border-px my-2' />
      <p className='text-blu-dark py-4 text-center font-bold'>
        {Strings.myPortfolios}
      </p>
      <ul className='pt-3'>
        {portfolios.map((portfolio, index) => (
          <li key={index + 1} className='pb-2'>
            <PortfolioItem name={portfolio.name} />
          </li>
        ))}
      </ul>
    </div>
  )
}
