import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeStackNavigator from './src/navigation/WelcomeStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <WelcomeStackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
