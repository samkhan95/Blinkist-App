import BookView from '.';
import {render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../../../store';

const MockBookView=()=>{
    return (
        <BrowserRouter>
        <Provider store={store}>
            <BookView />
        </Provider> 
        </BrowserRouter>
    )

}

describe('<BookList>', () => {
    test('check if it is present', () => {
      render(<MockBookView/>);
      const name = screen.getByTestId('bview');
      expect(name).toBeDefined();
    });
    test('check if it is truthy', () => {
        render(<MockBookView/>);
        const name = screen.getByTestId('bview');
        expect(name).toBeTruthy();
      });
      test('check if the link is defined', () => {
        render(<MockBookView/>);
        const name = screen.getByTestId('viewlink');
        expect(name).toBeDefined();
      });
      test('check if the link is truthy', () => {
        render(<MockBookView/>);
        const name = screen.getByTestId('viewlink');
        expect(name).toBeTruthy();
      });


});