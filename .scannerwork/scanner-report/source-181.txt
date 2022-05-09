import Footer from '.';
import {render, screen } from '@testing-library/react';

describe('<Footer>', () => {
    test('check if it is present', () => {
      render(<Footer/>);
      const name = screen.getByTestId('footer');
      expect(name).toBeDefined();
    });
    test('check if it is truthy', () => {
        render(<Footer/>);
        const name = screen.getByTestId('footer');
        expect(name).toBeTruthy();
      });
});