/**
 * Created by timur on 8/11/16.
 */

const path = require('path')
const express = require('express')
const log = require('gutil-color-log')
const crypto = require('crypto')
const hash = crypto.createHash('sha256')


const app = express()

app.use(express.static(__dirname))

app.get('blocks', (req, res) => {
  res.send({ id: data.toString('hex'), name: 'Jen' })
  res.end()
})

// hash.on('readable', () => {
//
//   const data = hash.read()
//
//   if (data) {
//
//     app.get('/', (req, res) => {
//       res.sendFile(path.resolve('dist/index.html'))
//       res.end()
//     })
//
//     app.listen(3000)
//   }
//
// })

// hash.write('some data to hash')
// hash.end()

app.listen(3000)

log('cyan', 'express app running at http://localhost:3000')
