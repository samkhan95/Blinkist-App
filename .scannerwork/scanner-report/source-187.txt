import IconButton from '.';
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';
import { render, screen } from '@testing-library/react';

describe('App', () => {
    test('check the icon', () => {
        render(<IconButton children={<BusinessCenterSharpIcon/>}/>);
        const name = screen.getByTestId('3');
        expect(name).toBeDefined();
      });
        test('check if the icon is Truthy', () => {
            render(<IconButton children={<BusinessCenterSharpIcon/>}/>);
            const name = screen.getByTestId('3');
            expect(name).toBeTruthy();
        });

});
