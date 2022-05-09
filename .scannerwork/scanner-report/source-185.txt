import BookState from ".";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

const MockBookState=()=>{
    return (
        <BrowserRouter>
            <BookState/>
        </BrowserRouter>
    )

}

describe('<MockBookState>', () => {
    test('check if it is present', () => {
      render(<MockBookState/>);
      const name = screen.getByTestId('bstate');
      expect(name).toBeDefined();
    });
    test('check if it is truthy', () => {
        render(<MockBookState/>);
        const name = screen.getByTestId('bstate');
        expect(name).toBeTruthy();
      });
      test('check if tabs are defined', () => {
        render(<MockBookState/>);
        const name = screen.getByTestId('tabs');
        expect(name).toBeDefined();
      });
      test('check if tabs are Truthy', () => {
        render(<MockBookState/>);
        const name = screen.getByTestId('tabs');
        expect(name).toBeTruthy();
      });
      
});