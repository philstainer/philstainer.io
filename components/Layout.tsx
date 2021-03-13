import {ReactNode} from 'react'
import {Nav} from '@/components/Nav'

type Props = {
  children: ReactNode
}

export const Layout = ({children}: Props): JSX.Element => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Nav />

      <main>{children}</main>
    </div>
  )
}
