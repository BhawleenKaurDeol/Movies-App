import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyComponent from './src/components/NavigationComponent';  // BottomNavigation component
import Details from './src/containers/Details';


const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50"/> 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Movies App" component={MyComponent} options={{
    headerStyle: { backgroundColor: '#2c3e50',height: 100, },  // Header background color
    headerTintColor: '#fff',  // Header text color
    headerTitleStyle: { 
      fontWeight: 'bold',
    },
    headerTitleAlign: 'center',   // Title text style
  }} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}