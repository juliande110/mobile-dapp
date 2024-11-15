import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Home from './screens/Home';
import Details from './screens/Details';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    "Inter-Bold": require('./assets/fonts/Inter-Bold.ttf'),
    "Inter-SemiBold": require('./assets/fonts/Inter-SemiBold.ttf'),
    "Inter-Medium": require('./assets/fonts/Inter-Medium.ttf'),
    "Inter-Regular": require('./assets/fonts/Inter-Regular.ttf'),
    "Inter-Light": require('./assets/fonts/Inter-Light.ttf'),
  })

  if (!fontsLoaded) {
    return null;
  }

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };
  
  const Stack = createStackNavigator();


  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}       
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


