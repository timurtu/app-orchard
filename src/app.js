/**
 * Created by timur on 7/26/16.
 */

import dom from 'domali'

import nav from './nav'
import wrapper from './wrapper'


const app = dom.create('app')

app.appendChild(nav)

app.appendChild(wrapper)

dom.render(app)
