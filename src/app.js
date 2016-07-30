/**
 * Created by timur on 7/26/16.
 */

import './styles/main.scss'
import dom from 'domali'


const [app, nav, title, wrapper] =
  dom.create('app', 'nav', 'h1', 'div')

title.appendChild(document.createTextNode('App Orchard'))

nav.appendChild(title)
app.appendChild(nav)

wrapper.set({ class: 'wrapper' })

app.appendChild(wrapper)

dom.render(app)

