/**
 * Created by timur on 8/3/16.
 */

const ideas = (state = [], action) => {
  
  /* eslint-disable indent */
  switch (action.type) {
    case 'server/add_idea':
      
      return [{
        title: action.title,
        id: action.id,
        stars: 0
      }, ...state]
    
    case 'server/star':
      return state.map(idea => {
        
        const stars = idea.stars + 1
        
        return (idea.id === action.id) ?
          Object.assign({}, idea, { isStarred: true, stars }) : idea
      })
    
    case 'server/unstar':
      return state.map(idea => {
      
        const stars = idea.stars - 1
      
        return (idea.id === action.id) ?
          Object.assign({}, idea, { isStarred: false, stars }) : idea
      })
    
    case 'server/remove_idea':
    default:
      return state
  }
  /* eslint-enable indent */
}

export default ideas
