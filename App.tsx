
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './Navigation/Navigation'
import { View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Colors } from './styles';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background}}>
      <StatusBar style="light" />
      {/* SO THE CONTENT WONT BE ABOVE STATUS BAR */}
      <View style={{ marginTop: 23}}/> 
      <Navigation />
    </SafeAreaView>
    </>
  );
}