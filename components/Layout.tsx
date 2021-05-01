import {ReactNode} from 'react'
import {Nav} from '@/components/Nav'
import {ThemeButton} from '@/components/ThemeButton'

type Props = {
  children: ReactNode
}

export const Layout = ({children}: Props): JSX.Element => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ThemeButton />
      <Nav />

      <main>{children}</main>
    </div>
  )
}
