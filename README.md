# App Orchard

An app where users suggest app ideas.

## Building from source

### Install
- `git clone https://github.com/timurtu/app-orchard`
- `cd app-orchard`
- `npm install`

### Production
- open __webpack.config.js__ in an editor
- change `DEV_MODE` to `false`
```javascript
const DEV_MODE = false
```
- `npm run prod`
- go to __http://localhost:3000__

### Hot loading
- open __webpack.config.js__ in an editor
- change `DEV_MODE` to `true`
```javascript
const DEV_MODE = true
```
- `npm run dev`
- go to __http://localhost:8080__
