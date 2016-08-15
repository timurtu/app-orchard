/**
 * Created by timur on 8/12/16.
 */

import React from 'react'
import IdeaList from './IdeaList'
import Alerts from './Alerts'
import IdeaForm from './IdeaForm'


const AppOrchard = ({ alerts, ideas }) =>
  <div className="container">
    <nav>
      <h1>App Orchard</h1>
    </nav>
    
    <div className="wrapper">
      <Alerts alerts={alerts}/>
      <IdeaList ideas={ideas}/>
    </div>
    
    <footer>
      <IdeaForm/>
    </footer>
  </div>

export default AppOrchard
