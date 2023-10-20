import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@/screens/HomeScreen';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name={'Home'} component={HomeScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
