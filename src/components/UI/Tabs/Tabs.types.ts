import React, { PropsWithChildren, ReactElement, ReactNode } from 'react'

export interface TabsProps {
  children: Array<ReactElement<TabProps>>
  initialSelectedTab?: React.Key | null
  wrapperClasses?: string
}

export type TabHeader = {
  label: ReactNode | undefined
  key: React.Key | null
  headerClasses?: string
  wrapperClasses?: string
}

export type TabProps = PropsWithChildren<TabHeader>
