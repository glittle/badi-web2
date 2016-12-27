var folder = './pages/'

// import Home from './pages/Home'
// import Listing from './pages/Listing'
// import Verse from './pages/Verse'
// import UserSetup from './pages/UserSetup'

const components = [
  // this is their order in the menus
  require(folder + 'Home'),
  require(folder + 'Listing'),
  require(folder + 'Verse'),
  require(folder + 'UserSetup')
]

const routes = components.map(function (c) {
  return {
    path: '/' + c.data().path,
    component: c
  }
})

export default {
  raw: routes,
  menuPage: routes.map(function (m) {
    var data = m.component.data();
    return {
      to: '#/' + data.path,
      text: data.title
    }
  })
}
