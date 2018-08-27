import React, { Component } from 'react';
import { StatusBar, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Stack, Actions } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/es/integration/react';

import {
  Root, StyleProvider, Button, Text
} from 'native-base';
import getTheme from '../../native-base-theme/components';
import theme from '../../native-base-theme/variables/commonColor';

import Routes from './routes/index';
import Loading from './components/Loading';

// Hide StatusBar on Android as it overlaps tabs
if (Platform.OS === 'android') StatusBar.setHidden(true);

class App extends Component {
  _onPressButton = () => {
    // Alert.alert('You tapped the button!')
    console.log('onPress2')
    Actions.profileHome()
  }

  render = () => {
    const { store, persistor } = this.props
    return (
      <Root>
        <Provider store={store}>
          <PersistGate
            loading={<Loading />}
            persistor={persistor}
          >
            {/* <Button onPress={this._onPressButton}>
              <Text>
                Press me
              </Text>
            </Button>
            <Text onPress={Actions.recipes}>
              Press me2
            </Text> */}
            <StyleProvider style={getTheme(theme)}>
              <Router>
                <Stack key="root">
                  {Routes}
                </Stack>
              </Router>
            </StyleProvider>
          </PersistGate>
        </Provider>
      </Root>
    )
  }
}
App.propTypes = {
  store: PropTypes.shape({}).isRequired,
  persistor: PropTypes.shape({}).isRequired,
};

export default App;
