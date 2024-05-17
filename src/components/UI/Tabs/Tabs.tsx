'use client'

import { Key, ReactElement, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { TabHeader, TabProps, TabsProps } from './Tabs.types'

export const Tabs = ({
  children,
  initialSelectedTab,
  wrapperClasses,
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState<Key | null>(null)

  const tabHeaders: TabHeader[] = children.map(
    (item: ReactElement<TabProps>) => {
      return { key: item.key, label: item.props.label }
    },
  )

  useEffect(() => {
    if (!activeTab) {
      setActiveTab(initialSelectedTab || tabHeaders[0].key)
    }
  }, [activeTab])

  return (
    <div
      className={twMerge('flex w-full min-w-[300px] flex-col', wrapperClasses)}
    >
      <div className='grid auto-cols-fr grid-flow-col'>
        {tabHeaders.map(tabHeader => (
          <div
            key={tabHeader.key}
            onClick={() => setActiveTab(tabHeader.key)}
            className={twMerge(
              'flex cursor-pointer flex-row justify-center border-b-2 border-grey-medium p-4 text-grey-medium transition-colors duration-300',
              tabHeader.key === activeTab
                ? 'border-primary-dark text-primary-dark'
                : '',
              tabHeader.headerClasses,
            )}
          >
            {tabHeader.label}
          </div>
        ))}
      </div>

      {children.map((child: ReactElement<TabProps>) => (
        <div
          key={`${child.key}_content`}
          className={twMerge(
            'flex flex-col',
            child.key !== activeTab ? 'hidden' : '',
            child.props?.wrapperClasses,
          )}
        >
          {child.props?.children || null}
        </div>
      ))}
    </div>
  )
}
