import Button from '.';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<Button>', () => {
  test('check the buttom name', () => {
    render(<Button children="Click Me"/>);
    const name = screen.getByTestId('2');
    expect(name.textContent).toBe('Click Me');
  });

  const handleClick = jest.fn();
   
  it('Checking the click',() => {

  render(<Button
    onClick={handleClick} children={undefined}      />);
      expect(screen.getByTestId("2")).toBeTruthy();
  });

  it('checking the function call',() => {
    render(<Button
     children='Add Book'
         onClick={handleClick}
     />);
     fireEvent.click(screen.getByText(/Add Book/i));
     expect(handleClick).toHaveBeenCalledTimes(1);
 });

});
