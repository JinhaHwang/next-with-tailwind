import { render } from '@testing-library/react'
import React, { ComponentProps, ReactElement } from 'react'
import { RecoilRoot } from 'recoil'

interface Props {
  children: ReactElement
}

const RecoilWrapper = ({ children }: Props) => <RecoilRoot>{children}</RecoilRoot>

const customRender = (ui: ReactElement, options?: ComponentProps<any>) =>
  render(ui, { wrapper: RecoilWrapper, ...options })

// re-export everything
export * from '@testing-library/react'
// override render method
export { customRender as render }
