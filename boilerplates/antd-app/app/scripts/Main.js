import React from 'react';
import {
  Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { createBrowserHistory } from 'history';
import dva from './util/dva';
import models from './model';
import SignIn from './containers/passport/SignIn';
import '../styles/global.less';

moment.locale('zh-cn');

const dvaApp = dva.createApp({
  initialState: {},
  models,
});
const store = dvaApp.getStore();
const history = createBrowserHistory();

function Main() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Redirect to="sign-in" />
            )}
          />
          <Route path="/sign-in" component={SignIn} />
          <Route component={SignIn} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default Main;
