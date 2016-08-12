/**
 * Created by timur on 8/3/16.
 */

const ideas = (state = [], action) => {
  
  /* eslint-disable indent */
  switch (action.type) {
    case 'add_idea':
      
      return [{
        title: action.title,
        id: action.id,
        stars: 0
      }, ...state]
    case 'remove_idea':
    default:
      return state
  }
  /* eslint-enable indent */
}

export default ideas
