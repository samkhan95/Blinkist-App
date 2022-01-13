import { EBooks } from '.';
import {render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

const MockBooks=()=>{
    return (
        <BrowserRouter>
            <EBooks/>
        </BrowserRouter>
    )

}

describe('<MockBooks>', () => {
    test('check if it is present', () => {
      render(<MockBooks/>);
      const name = screen.getByTestId('ebooks');
      expect(name).toBeDefined();
    });
    test('check if it is truthy', () => {
        render(<MockBooks/>);
        const name = screen.getByTestId('ebooks');
        expect(name).toBeTruthy();
      });
});