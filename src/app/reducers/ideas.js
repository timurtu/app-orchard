/**
 * Created by timur on 8/3/16.
 */

const ideas = (state = [], action) => {
  
  
  
  /* eslint-disable indent */
  switch (action.type) {
    case 'add_idea':
      
      return [...state, {
        title: action.title,
        id: action.id
      }]
    case 'remove_idea':
    default:
      return state
  }
  /* eslint-enable indent */
}

export default ideas
