import React from 'react'
import renderer from 'react-test-renderer'
import { Emoji } from '.'

describe('Emoji', () => {
  test('renders the Emoji component', async () => {
    const tree = renderer.create(<Emoji symbol="🤩" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
