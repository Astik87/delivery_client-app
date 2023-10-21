import React from 'react';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';

import { StoreProvider } from './providers/StoreProvider';

import Header from '@/widgets/Header';

const App = () => {
  const colorScheme = useColorScheme();

  return (
    <PaperProvider
      theme={colorScheme === 'dark' ? MD3DarkTheme : MD3LightTheme}
    >
      <StoreProvider>
        <Stack
          screenOptions={{
            headerBackVisible: true,
            // eslint-disable-next-line react/no-unstable-nested-components
            header: ({ options, route }) => (
              <Header
                headerBackVisible={options.headerBackVisible ?? false}
                title={options.title ?? route.name}
              />
            ),
          }}
        />
      </StoreProvider>
    </PaperProvider>
  );
};

export default App;
