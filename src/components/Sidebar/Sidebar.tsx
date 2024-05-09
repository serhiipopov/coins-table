import { Button, SidebarProps } from '@/components'
import { Strings } from '@/constants'

export const Sidebar = ({ portfolio }: SidebarProps) => {
  return (
    <div className='fixed left-0 h-[calc(100vh-2rem)] w-full max-w-64 px-4'>
      <Button className='mb-2'>
        <span>{Strings.addPortfolio}</span>
      </Button>

      <ul>
        {portfolio.map((item, index) => (
          <li key={index + 1}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
