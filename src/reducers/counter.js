/**
 * Created by timur on 8/3/16.
 */

export default function (state = 0, action) {
  
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

