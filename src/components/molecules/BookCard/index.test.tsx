import BookCard from ".";
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

const MockBookCard = () => {
  return (
      <BrowserRouter>
        <BookCard image="images/img1.png"
      title="Being Boss"
      author="Kathleen"
      time="13"/>
      </BrowserRouter>
  )
}

describe('<BookCard>', () => {
    test('check the card props', () => {
      render(<MockBookCard/>);
      expect(screen.getByText('Being Boss')).toBeTruthy();
      expect(screen.getByText(/13/)).toBeTruthy();
      expect(screen.getByText('Kathleen')).toBeTruthy();
    });

    test('check if the card exits', () => {
      render(<MockBookCard/>);
      const card = screen.getAllByTestId("card");
      expect(card).toBeDefined();
    });

    test('check if link is present', () => {
      render(<MockBookCard/>);
      const link = screen.getByTestId("bookLink");
      expect(link).toBeDefined();
    });


});