import React from 'react';
import createStore from './store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider as QueryProvider, createClient,defaultExchanges, subscriptionExchange } from 'urql';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Dashboard from './Features/Dashboard/Dashboard';

const subscriptionClient = new SubscriptionClient(`ws://react.eogresources.com/graphql`, {
  reconnect: true,
});

export const client = createClient({
  url: 'https://react.eogresources.com/graphql',
  exchanges:[
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: operation => subscriptionClient.request(operation)
    }),
  ],
});

const store = createStore();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(39,49,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      default: 'rgb(226,231,238)',
    },
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
    <QueryProvider value={client}>
      <Wrapper>
        <Header />
        <Dashboard/>
        <ToastContainer />
      </Wrapper>
      </QueryProvider>
    </Provider>
  </MuiThemeProvider>
);

export default App;
