import { SearchField } from "."
import {render, screen } from '@testing-library/react';

describe('<SearchFeild>', () => {
    test('check the if is present', () => {
      render(<SearchField/>);
      const name = screen.getByTestId('search');
      expect(name).toBeDefined();
    });

    test('check the search is truthy', () => {
        render(<SearchField/>);
        const name = screen.getByTestId('search');
        expect(name).toBeTruthy();
      });
  
});