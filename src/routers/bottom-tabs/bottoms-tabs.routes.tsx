import React from 'react';
import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";

import Home from "../../screens/Home";
import Gallery from "../../screens/Gallery";

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const {Screen, Navigator} = createBottomTabNavigator ();

const BottomTabsRoutes = () => {
  return (
    <Navigator>
        <Screen name='home' component={Home}
        options={
          {
            title: 'Menu',
            headerTintColor: '#1ab7da',
            headerShown: true,
            tabBarIcon: ({color, size}) => (
              <Ionicons
                name='home'
                color='#1ab7da'
                size={size}
              />
            )
          }

        }
        />
        <Screen name='gallery' component={Gallery}
        options={
          {
            title: 'Gallery',
            headerTintColor: '#1ada30',
            headerShown: true,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name='view-gallery'
                color='#1ada30'
                size={size}
              />
            )
          }
        }
        />
    </Navigator>
  )
}

export default BottomTabsRoutes;