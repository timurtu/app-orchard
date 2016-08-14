/**
 * Created by timur on 8/7/16.
 */

import path from 'path'
import log from 'gutil-color-log'
import express from 'express'
import db from 'pouchdb'

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)


server.listen(3000)

app.use(express.static(path.resolve('dist')))

log('cyan', 'express app running at http://localhost:3000')
