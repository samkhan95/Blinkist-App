import { AddToLib } from ".";
import { fireEvent,render,screen } from "@testing-library/react";

describe('<AddToLib>',()=>{
    test('check the text of AddToLib',()=>{
          render(<AddToLib/>);
        const name = screen.getByTestId('AddButton')
       expect(name.textContent).toBe("Add to lib");
        


    });
    test('check if AddToLib is present',()=>{
        render(<AddToLib/>);
      const name = screen.getAllByTestId('AddButton')
     expect(name).toBeTruthy();
    
  });

});