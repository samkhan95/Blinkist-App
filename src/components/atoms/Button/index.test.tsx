import React from 'react';
import Button from '.';
import {  render, screen } from '@testing-library/react';

describe('<Button>', () => {
  test('check the buttom name', () => {
    render(<Button>children={"Click Me"}</Button>);
    const name = screen.getByTestId('2');
    expect(name).toBeInTheDocument();
  });

  const handleClick = jest.fn();
   
  it('Checking the click',() => {

  render(<Button
    onClick={handleClick} >children={"Click Me"}</Button>);
      expect(screen.getByTestId("2")).toBeTruthy();
  });


});
