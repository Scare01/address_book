import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from '$redux/store';
import MainContainer from '$containers/MainContainer/Main';

const { store, persistor } = createStore();

render(
  <Provider store={store}>
    <MainContainer />
    {/* then add persitgate */}
    {/* <PersistGate loading={null} persistor={persistor}>
    </PersistGate> */}
  </Provider>,
  document.getElementById('root'),
);
