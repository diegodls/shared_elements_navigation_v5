import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//PAGES
import Home from '../pages/Home';
import Details from '../pages/Details';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator screenOptions={{ headerShown: false }}>
    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="Details" component={Details} />
  </AppStack.Navigator>
);

export default AppRoutes;
