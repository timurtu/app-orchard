/**
 * Created by timur on 8/3/16.
 */

const ideas = (state = [], action) => {
  
  /* eslint-disable indent */
  switch (action.type) {
    
    case 'server/fill_ideas':
      return action.ideas
    
    case 'server/add_idea':
      return [{
        title: action.title,
        id: action.id,
        stars: 0
      }, ...state]
    
    case 'server/star':
      return star(state, action, false)
    
    case 'server/unstar':
      return star(state, action, true)
    
    default:
      return state
  }
  /* eslint-enable indent */
}

const star = (state, action, unstar) => state.map(idea => {
  const stars = unstar ? idea.stars - 1 : idea.stars + 1
  return (idea.id === action.id) ?
    Object.assign({}, idea, { isStarred: !unstar, stars }) : idea
})

export default ideas
