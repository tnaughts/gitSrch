/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React from 'react';
 import { createAppContainer } from 'react-navigation';
 import { createStackNavigator } from 'react-navigation-stack';
 import {Search} from './components/Search'
 import Repo from './components/Repo'
 

 const AppNavigator = createStackNavigator({
   Search: {
     screen: Search,
   },
   Repo: {
     screen: Repo
   },
   initialRouteName: 'Search'
 });

 export default createAppContainer(AppNavigator);

