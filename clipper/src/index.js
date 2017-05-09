import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import FormDisplay from './components/FormDisplay';
import ClipsContainer from './containers/ClipsContainer';
import ActiveClip from './components/ActiveClip';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReduxPromise from 'redux-promise';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, reduxExtension)}>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/clips' component={ClipsContainer} />
        <Route path='/add-clip' component={FormDisplay} />
        <Route path='/clips/:id' component={ActiveClip} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
