import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/Redux/Store';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/Page/Login';
import Home from './src/Page/Home';
import Register from './src/Page/Register';
import MainMenu from './src/Page/MainMenu';

const Stack = createStackNavigator();

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Register" component={Register}/>
          <Stack.Screen name="MainMenu" component={MainMenu}/>
          {/* <Stack.Screen name="MainMenu" component={MainMenu}/>
          <Stack.Screen name="TambahkanTanaman" component={TambahkanTanaman}/>
          <Stack.Screen name="ProfileTanaman" component={ProfileTanaman}/>
          <Stack.Screen name="Setting" component={Setting}/>
          <Stack.Screen name="UpdateUser" component={UpdateUser}/>
          <Stack.Screen name="DetailTanaman" component={DetailTanaman}/> */}
          </Stack.Navigator>
          </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
