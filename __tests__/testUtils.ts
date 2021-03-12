import {ReactNode, ComponentType} from 'react'
import {render, RenderResult} from '@testing-library/react'

type Props = {
  children: ReactNode
}

const Providers = ({children}: Props) => {
  return children
}

const customRender = (ui: JSX.Element, options = {}): RenderResult =>
  render(ui, {wrapper: Providers as ComponentType, ...options})

export * from '@testing-library/react'

export {customRender as render}
