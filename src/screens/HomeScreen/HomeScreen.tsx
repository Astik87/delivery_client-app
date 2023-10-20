import React from 'react';
import { Text, View, StyleSheet, ScaledSize } from 'react-native';

import { useStyles } from '@/hooks/useStyles';

const HomeScreen = () => {
  const styles = useStyles(styleCreator);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styleCreator = ({ width }: ScaledSize) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: width < 800 ? 'center' : 'flex-start',
    },
  });
};

export default HomeScreen;
