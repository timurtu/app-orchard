/**
 * Created by timur on 8/3/16.
 */

import expect from 'expect'

export default function counter(state = 0, action) {
  
  /* eslint-disable indent */
  switch (action.type) {
    case 'add':
      return state + 1
    case 'subtract':
      return state - 1
    default:
      return state
  }
  /* eslint-enable indent */
}

expect(
  counter(0, { type: 'add' })
).toEqual(1)

expect(
  counter(1, { type: 'add' })
).toEqual(2)

expect(
  counter(2, { type: 'subtract' })
).toEqual(1)

expect(
  counter(1, { type: 'subtract' })
).toEqual(0)

expect(
  counter(1, { type: 'other' })
).toEqual(1)
