import React, { FC } from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from 'expo-router';

import { HeaderProps } from '../../types/HeaderProps.ts';

const Header: FC<HeaderProps> = ({ headerBackVisible, title }) => {
  const navigation = useNavigation();

  const canGoBack = navigation.canGoBack();

  return (
    <Appbar.Header>
      {headerBackVisible && canGoBack && (
        <Appbar.BackAction onPress={navigation.goBack} />
      )}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default Header;
