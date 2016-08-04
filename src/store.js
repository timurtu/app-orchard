/**
 * Created by timur on 8/3/16.
 */

import { createStore } from 'redux'
import rootReducer from './reducers/index'

export const store = createStore(rootReducer)
