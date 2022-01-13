import { BookList } from ".";
import {render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

const MockBookList=()=>{
    return (
        <BrowserRouter>
          <BookList />
        </BrowserRouter>
    )

}

describe('<BookList>', () => {
    test('check if it is present', () => {
      render(<MockBookList/>);
      const name = screen.getByTestId('blist');
      expect(name).toBeDefined();
    });
    test('check if it is truthy', () => {
        render(<MockBookList/>);
        const name = screen.getByTestId('blist');
        expect(name).toBeTruthy();
      });
});