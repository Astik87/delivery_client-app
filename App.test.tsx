import React from 'react';
import { render } from '@testing-library/react-native';

import App from './App';

describe('<Index />', () => {
  it('has 1 child', () => {
    const tree = render(<App />);
    expect(tree.root.children.length).toBe(1);
  });
});
