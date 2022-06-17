import type { ReactElement } from 'react'
import { ExampleLayout } from '@/components/layout'

const OwnLayoautPage = () => <div>hello...</div>

OwnLayoautPage.getLayout = function getLayout(page: ReactElement) {
  return <ExampleLayout>{page}</ExampleLayout>
}

export default OwnLayoautPage
