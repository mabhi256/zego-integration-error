import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VideoCall from './VideoCall';

const Stack = createNativeStackNavigator();

export default function AppNavigation(props) {
  return (
    <Stack.Navigator initialRouteName="VideoCall">
      <Stack.Screen name="VideoCall" component={VideoCall} />
    </Stack.Navigator>
  );
}
