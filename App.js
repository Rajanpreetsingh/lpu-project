import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Provider } from 'react-redux';
// import { Root, Container } from 'native-base';
import Routes from './src/appNavigator'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/configureStore'
// import configureStore from './src/store/configureStore';

export default class App extends Component {

  render() {

    return (
      <Provider store={store}>
          <PersistGate loading={true} persistor={persistor}>
            <Routes />
          </PersistGate> 
      </Provider>
    )
  }
}
