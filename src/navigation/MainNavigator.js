import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ReactScreen from '../screens/ReactScreen';
import ReactNativeScreen from '../screens/ReactNativeScreen';
import NodeScreen from '../screens/Node';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="React" component={ReactScreen} />
      <Tab.Screen name="React Native" component={ReactNativeScreen} />
      <Tab.Screen name="Node" component={NodeScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
