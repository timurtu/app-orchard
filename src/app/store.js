/**
 * Created by timur on 8/3/16.
 */

import { createStore, applyMiddleware } from 'redux'
import createSocketIoMiddleware from 'redux-socket.io'
import io from 'socket.io-client'
import { combineReducers } from 'redux'

import ideas from './reducers/ideas'
import alerts from './reducers/alerts'


const rootReducer = combineReducers({ ideas, alerts })
const socket = io()
const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/')

export default applyMiddleware(socketIoMiddleware)(createStore)(rootReducer)
