/**
 * Created by timur on 8/9/16.
 */

const ideas = (state = [], action) => {
  
  /* eslint-disable indent */
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if(todo.id !== action.id) {
          return todo
        }
        
        return {
          ...todo,
          completed: !todo.completed
        }
        
      })
    
    default:
      return state
  }
  /* eslint-enable indent */
}

export default ideas
