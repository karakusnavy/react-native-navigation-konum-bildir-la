import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AppRegistry } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TutorialScreen from './Tutorial';
import AppScreen from './Home';
import KonumuGorScreen from './KonumuGor';
import LocationsScreen from './Locations'
import { name as appName } from './app.json';
const MainNavigator = createStackNavigator({
  TutorialScreen: { screen: TutorialScreen },

  AppScreen: { screen: AppScreen },
  LocationsScreen: { screen: LocationsScreen },
  KonumuGorScreen: { screen: KonumuGorScreen }

},
  { headerMode: 'none' }
);

const App = createAppContainer(MainNavigator);

export default App;


AppRegistry.registerComponent(appName, () => TutorialScreen);
