import ExpandNav from ".";
import {render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";


const MockExpandNav = () => {
  return (
      <BrowserRouter>
        <ExpandNav />
      </BrowserRouter>
  )
}


describe('<ExpandNav>', () => {
    test('check the if is present', () => {
      render(<MockExpandNav/>);
      const name = screen.getByTestId('expand');
      expect(name).toBeDefined();
    });

    test('check the if is truthy', () => {
      render(<MockExpandNav/>);
      const name = screen.getByTestId('expand');
      expect(name).toBeTruthy();
    });

    // test('check the onClick', () => {
    //   render(<MockExpandNav/>);
    //   fireEvent.click(screen.getByTestId('expand'));

    //   expect(handleClose).toBeCalledTimes(1);
    // });
    // test('check if  BOx is falsy', () => {
    //   render(<MockExpandNav/>);
    //   const name = screen.getByTestId('popup');
    //   expect(name).toBeTruthy();
    // });



});