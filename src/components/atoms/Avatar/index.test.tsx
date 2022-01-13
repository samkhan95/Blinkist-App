import Avatar from '.';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  test('check the Avatar name', () => {
    render(<Avatar label="A"/>);
    const name = screen.getByTestId('1');
    expect(name.textContent).toBe('A');
  });

});