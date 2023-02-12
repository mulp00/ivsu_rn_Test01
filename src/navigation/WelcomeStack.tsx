import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
// import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SplashScreen from '../screens/SplashScreen';

const WelcomeStack = createStackNavigator();

function WelcomeStackNavigator() {
  return (
    <WelcomeStack.Navigator initialRouteName={'Welcome'}>
      <WelcomeStack.Screen name="Welcome" component={WelcomeScreen} />
      <WelcomeStack.Screen name="Login" component={LoginScreen} />
      <WelcomeStack.Screen name="Register" component={RegisterScreen} />
      {/*<WelcomeStack.Screen*/}
      {/*  name="ForgotPassword"*/}
      {/*  component={ForgotPasswordScreen}*/}
      {/*/>*/}
      <WelcomeStack.Screen name="Splash" component={SplashScreen} />
    </WelcomeStack.Navigator>
  );
}

export default WelcomeStackNavigator;
