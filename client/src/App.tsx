import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import { withProvider } from './context/CardContext'
import Topics from './pages/Topics'
import Cards from './pages/Cards'
import Home from './pages/Home'

const App = () => {
  return (
    <HashRouter>
      <Home>
        <Switch>
          <Route exact path={'/'} component={Topics} />
          <Route exact path={'/cards'} component={Cards} />
          <Route
            render={function () {
              return <p>Not Found</p>
            }}
          />
        </Switch>
      </Home>
    </HashRouter>
  )
}

export default withProvider(App)
