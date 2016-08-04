/**
 * Created by timur on 8/3/16.
 */

import React from 'react'
import { store } from '../store'


const add = () => store.dispatch({ type: 'add' })
const subtract = () => store.dispatch({ type: 'subtract' })

store.subscribe(() => console.log(store.getState()))

export const Footer = () => <footer><Counter/></footer>

const Counter = () =>
  <div className="icons">
    <i onClick={add} className="fa fa-plus-circle fa-2x"/>
    <i onClick={subtract} className="fa fa-minus-circle fa-2x"/>
  </div>
