import BookInfo from ".";
import {render, screen } from '@testing-library/react';

describe('<BookInfo>', () => {
    test('check the if is present', () => {
      render(<BookInfo/>);
      const name = screen.getByTestId('info');
      expect(name).toBeDefined();
    });
    test('check the if is truthy', () => {
        render(<BookInfo/>);
        const name = screen.getByTestId('info');
        expect(name).toBeTruthy();
      });
      
});