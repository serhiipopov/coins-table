import { Key, useCallback, useState } from 'react'
import { LogInForm, SignUpForm, Tab, Tabs } from '@/components'
import { Strings } from '@/constants'

export interface AuthProps {
  type: 'logIn' | 'signUp'
}

export const Auth = ({ type }: AuthProps) => {
  const initialActiveTab = type === 'signUp' ? '1' : '0'
  const [activeTab, setActiveTab] = useState<Key>(initialActiveTab)

  const handleSignUpChange = useCallback(() => {
    setActiveTab('0')
  }, [])

  return (
    <div className='flex w-96 flex-col rounded-lg bg-gray-100 px-8 py-6 shadow-2xl'>
      <Tabs initialSelectedTab={activeTab}>
        <Tab key='0' label={Strings.logIn}>
          <LogInForm />
        </Tab>
        <Tab key='1' label={Strings.signUp}>
          <SignUpForm handleSignUpChange={handleSignUpChange} />
        </Tab>
      </Tabs>
    </div>
  )
}
