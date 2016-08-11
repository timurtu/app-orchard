/**
 * Created by timur on 8/3/16.
 */

import { combineReducers } from 'redux'
import ideas from './ideas'
import todos from './todos'
import addIdea from './addIdea'


const rootReducer = combineReducers({ ideas, addIdea, todos })

export default rootReducer
