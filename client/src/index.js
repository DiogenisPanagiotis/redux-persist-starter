import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import registerServiceWorker from './registerServiceWorker'
import Landing from './components/Landing'
import './index.css'

ReactDOM.render(
  	<Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
  	</Provider>,
  	document.querySelector('#root')
)
registerServiceWorker()
