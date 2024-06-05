import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../../screens/Home";
import Gallery from "../../screens/Gallery";

const {Screen, Navigator} = createStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator>
        <Screen name='home' component={Home}
        options={
          {
            title: 'Menu',
            headerTintColor: '#1ab7da',
            headerShown: true
          }

        }
        />
        <Screen name='gallery' component={Gallery}
        options={
          {
            title: 'Gallery',
            headerTintColor: '#1ada30',
            headerShown: true
          }
        }
        />
    </Navigator>
  )
}

export default StackRoutes;