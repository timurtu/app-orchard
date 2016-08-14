/**
 * Created by timur on 8/3/16.
 */

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client'

const socket = io()
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/")

export default applyMiddleware(socketIoMiddleware)(createStore)(rootReducer)
