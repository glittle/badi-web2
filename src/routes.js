import Home from './pages/Home'
import Listing from './pages/Listing'
import Verse from './pages/Verse'
import UserSetup from './pages/UserSetup'

const components = [
  Home,
  Listing,
  Verse,
  UserSetup
]

const routes = components.map(function (c) {
  return {
    path: '/' + c.data().path,
    component: c
  }
})

export default {
  raw: routes,
  menu: routes.map(function (m) {
    var data = m.component.data();
    return {
      href: '#/' + data.path,
      text: data.title
    }
  })
}
