/**
 * Created by timur on 8/3/16.
 */

import { combineReducers } from 'redux'
import ideas from './ideas'
import alerts from './alerts'


const reducer = combineReducers({ ideas, alerts })

export default reducer
