import React from "react";
import { AddToLib } from ".";
import {render,screen } from "@testing-library/react";

describe('<AddToLib>',()=>{
    test('check the text of AddToLib',()=>{
          render(<AddToLib/>);
        const name = screen.getByTestId('AddButton')
        expect(name).toBeInTheDocument();
        


    });
    test('check if AddToLib is truthy',()=>{
        render(<AddToLib/>);
      const name = screen.getAllByTestId('AddButton')
     expect(name).toBeTruthy();
    
  });
  test('check if AddToLib is present',()=>{
    render(<AddToLib/>);
    const name = screen.getAllByTestId('AddButton')
    expect(name).toBeDefined();

});

});
