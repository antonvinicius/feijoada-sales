import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FeedBack from './pages/Feedback'
import Landing from './pages/Landing'

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/obrigado" exact component={FeedBack} />
        </Switch>
      </BrowserRouter>
    </>
  )
}
