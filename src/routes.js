import React from 'react'
import App from './App'
import StockPhotos from './stockphotos'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

export default function Routes() {
    return (
    <BrowserRouter>
      <Switch>
        {/* add routes with layouts */}
        <Route path="/stock-photos" exact component={StockPhotos} />
        {/* <Route path="/" exact component={Index} /> */}
        <Route path="/" exact component={App} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
    )
}
