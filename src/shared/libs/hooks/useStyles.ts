import { ScaledSize, StyleSheet, useWindowDimensions } from 'react-native';

export const useStyles = <T extends ReturnType<typeof StyleSheet.create>>(
  styleCreator: (windowDimensions: ScaledSize) => T,
): T => {
  const windowDimensions = useWindowDimensions();

  return styleCreator(windowDimensions);
};
