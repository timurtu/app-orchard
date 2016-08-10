/**
 * Created by timur on 7/26/16.
 */

import dom from 'domali'
import React from 'react'
import ReactDOM from 'react-dom'
import { Posts, Footer, Toolbar } from './components'
import store from '../store'
import { add } from '../constants/actions'


const AppOrchard = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h2>{value}</h2>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

// {/*<div>*/}
//   {/*<Toolbar title="App Orchard"/>*/}
//   {/*<div className="wrapper">*/}
//     {/*<Posts/>*/}
//   {/*</div>*/}
//   {/*<Footer/>*/}
// {/*</div>*/}

const render = () => ReactDOM.render(
  <AppOrchard
    value={store.getState().ideas}
    onIncrement={() =>
      store.dispatch({
        type: 'add'
      })
    }
    onDecrement={() =>
      store.dispatch({
        type: 'remove'
      })
    }
  />,
  dom.getId('root')
)

store.subscribe(render)
render()
