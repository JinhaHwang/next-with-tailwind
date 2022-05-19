import { ReactElement } from 'react'

interface Props {
  children: ReactElement
}
export function DefaultLayout({ children }: Props) {
  return <div className="container mx-auto grid h-screen place-content-center">{children}</div>
}

export function ExampleLayout({ children }: Props) {
  return <div className="container mx-auto flex justify-center">{children}</div>
}
