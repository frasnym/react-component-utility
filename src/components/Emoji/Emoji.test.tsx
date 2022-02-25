import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import { Emoji } from '.'

describe('Emoji', () => {
  it('should renders the Emoji component', async () => {
    const tree = renderer.create(<Emoji symbol="🤩" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should renders the Emoji component without label', async () => {
    render(<Emoji symbol="🤩" />)

    const span = await screen.findByText('🤩')
    expect(span.getAttribute('role')).toEqual('img')
    expect(span.getAttribute('aria-label')).toEqual('')
    expect(span.getAttribute('aria-hidden')).toEqual('true')
  })

  it('should renders the Emoji component with label', async () => {
    const label = '[TEST] label'
    render(<Emoji symbol="🤩" label={label} />)

    const span = await screen.findByText('🤩')
    expect(span.getAttribute('role')).toEqual('img')
    expect(span.getAttribute('aria-label')).toEqual(label)
    expect(span.getAttribute('aria-hidden')).toEqual('false')
  })
})
