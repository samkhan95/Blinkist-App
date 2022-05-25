import React from 'react';
import Button from '.';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<Button>', () => {
  test('check the buttom name', () => {
    render(<Button>children={"Click Me"}</Button>);
    const name = screen.getByTestId('2');
    expect(name.textContent).toBe('Click Me');
  });

  const handleClick = jest.fn();
   
  it('Checking the click',() => {

  render(<Button
    onClick={handleClick} >children={"Click Me"}</Button>);
      expect(screen.getByTestId("2")).toBeTruthy();
  });

  it('checking the function call',() => {
    render(<Button
         onClick={handleClick}>children={'Add Book'}</Button>);
     fireEvent.click(screen.getByText(/Add Book/i));
     expect(handleClick).toHaveBeenCalledTimes(1);
 });

});
