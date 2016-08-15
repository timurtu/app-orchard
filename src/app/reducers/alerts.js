/**
 * Created by timur on 8/12/16.
 */

import { removeById } from './helper'

const alerts = (state = [], action) => {
  
  /* eslint-disable indent */
  switch (action.type) {
    case 'add_alert':
      return [{
        id: action.id,
        title: action.title,
        message: action.message,
        alertType: action.alertType
      }, ...state]
    case 'remove_alert':
      return removeById(action.id, state)
    default:
      return state
  }
  /* eslint-enable indent */
}

export default alerts
