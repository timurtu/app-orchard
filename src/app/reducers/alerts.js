/**
 * Created by timur on 8/12/16.
 */

const alerts = (state = [], { type, title, message, id, alertType }) => {
  
  /* eslint-disable indent */
  switch (type) {
    
    case 'add_alert':
      return [{ id, title, message, alertType }, ...state]
    
    case 'remove_alert':
      return state.filter(alert => alert.id !== id)
    
    default:
      return state
  }
  /* eslint-enable indent */
}

export default alerts
