import { useEffect } from 'react'
import type { RecoilState } from 'recoil'
import { useRecoilSnapshot, useRecoilValue } from 'recoil'

/**
 * 디버그용 옵저버
 * @returns
 */
export const DebugObserver = () => {
  const snapshot = useRecoilSnapshot()
  useEffect(() => {
    console.debug('The following atoms were modified:')

    Array.from(snapshot.getNodes_UNSTABLE({ isModified: true })).forEach((node) => {
      console.debug(node.key, snapshot.getLoadable(node))
    })
  }, [snapshot])

  return null
}

interface RecoilObserverProps {
  node: RecoilState<any>
  onChange: (value: any) => void
}

/**
 * 테스트용 옵저버
 * @param param0
 * @returns
 */
export const RecoilObserver = ({ node, onChange }: RecoilObserverProps) => {
  const value = useRecoilValue(node)
  useEffect(() => onChange(value), [onChange, value])
  return null
}
