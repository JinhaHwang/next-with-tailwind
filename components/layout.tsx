import { ReactElement } from 'react'

interface Props {
  children: ReactElement
}
export const DefaultLayout = ({ children }: Props) => (
  <div className="container mx-auto grid min-h-screen place-content-center">{children}</div>
)

export const ExampleLayout = ({ children }: Props) => (
  <div className="container mx-auto flex justify-center">{children}</div>
)
