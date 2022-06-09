import { fireEvent, render, screen } from '@/libs/test-utils'
import { DebugObserver, RecoilObserver } from '@/store/observers'
import React from 'react'
import { atom, useRecoilState } from 'recoil'

const nameState = atom({
  key: 'nameAtom',
  default: '',
})

const Form = () => {
  const [name, setName] = useRecoilState<string>(nameState)
  return (
    <form>
      <input
        data-testid="name_input"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </form>
  )
}

describe('recoil inside react', () => {
  it('change when the user enters a name.', () => {
    const onChange = jest.fn()

    render(
      <>
        <DebugObserver />
        <RecoilObserver node={nameState} onChange={onChange} />
        <Form />
      </>,
    )

    const component = screen.getByTestId('name_input')

    fireEvent.change(component, { target: { value: 'Recoil' } })

    expect(onChange).toHaveBeenCalledTimes(2)
    expect(onChange).toHaveBeenCalledWith('') // Initial state on render.
    expect(onChange).toHaveBeenCalledWith('Recoil') // New value on change.
  })
})

export {}
