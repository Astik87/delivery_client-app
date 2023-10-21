import React from 'react';
import { Slot } from 'expo-router';
import { SafeAreaView, Text } from 'react-native';

const Layout = () => {
  return (
    <SafeAreaView>
      <Text>Header</Text>
      <Slot />
      <Text>Footer</Text>
    </SafeAreaView>
  );
};

export default Layout;
