/**
 * Created by timur on 7/26/16.
 */

import './styles/main.scss'
import dom from 'domali'


const [app, nav, title, wrapper, p] =
  dom.create('app', 'nav', 'h1', 'div', 'p')

title.appendChild(document.createTextNode('App Orchard'))

nav.appendChild(title)
app.appendChild(nav)

p.appendChild(document.createTextNode(
  'Welcome to the App Orchard. To get started, create a new App Idea.'
))

wrapper.set({ class: 'wrapper' })
  .appendChild(p)

app.appendChild(wrapper)

dom.render(app)

