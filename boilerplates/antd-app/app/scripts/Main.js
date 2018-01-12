import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import createBrowserHistory from 'history/createBrowserHistory';
import Demo from './containers/Demo';
import configureStore from './reducers/index.reducer';
import '../styles/global.less';

moment.locale('zh-cn');

const store = configureStore();
const history = createBrowserHistory();

function Main() {
  return (
    <LocaleProvider locale={zhCN}>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Redirect to="demo" />
              )}
            />
            <Route path="/demo" component={Demo} />
            <Route component={Demo} />
          </Switch>
        </Router>
      </Provider>
    </LocaleProvider>
  );
}

export default Main;
