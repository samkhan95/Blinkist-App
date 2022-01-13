import Finished from ".";
import {render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store";

const MockFinished=()=>{
    return (
        <BrowserRouter>
        <Provider store={store}>
            <Finished/>
        </Provider>
        </BrowserRouter>
    )

}

describe('<MockFinished>', () => {
    test('check if it is present', () => {
      render(<MockFinished/>);
      const name = screen.getByTestId('finished');
      expect(name).toBeDefined();
    });
    test('check if it is truthy', () => {
        render(<MockFinished/>);
        const name = screen.getByTestId('finished');
        expect(name).toBeTruthy();
      });
});