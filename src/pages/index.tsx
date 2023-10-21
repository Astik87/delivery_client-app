import React from 'react';
import { Text, View } from 'react-native';
import { Stack } from 'expo-router';
import { useSelector } from 'react-redux';

import { userIsAuthSelector } from '@/entities/User';

const Home = () => {
  const userIsAuth = useSelector(userIsAuthSelector);

  return (
    <View>
      <Stack.Screen options={{ title: 'Home' }} />
      <Text>{userIsAuth ? 'Yes' : 'No'}</Text>
    </View>
  );
};

export default Home;
