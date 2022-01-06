import { Box } from '@mui/material';
import Button from '../../atoms/Button';
import img1 from './Blinkist.png';

const Footer = () => {
    return (
        <>
        <Box >
            <Box>
                <Box >
                    <Box>
                        <img src={img1} alt="Blinkist logo" />
                    </Box>
                    <Box>
                        <h3>Big ideas in small packages </h3> 
                        <h3>Start learning now</h3>
                    </Box>
                </Box>
                <Box>
                        <ul><strong>Editorial</strong>
                            <li>Book lists</li>
                            <li>What is Nonfiction?</li>
                            <li>What to Read Next</li>
                            <li>Benefits of Reading</li>
                        </ul>
                    </Box>
                    <Box>
                        <ul><strong>Useful links</strong>
                            <li>Pricing</li>
                            <li>Blinkist Business</li>
                            <li>Gift Cards</li>
                            <li>Benefits of Reading</li>
                            <li>Blinkist Magazine</li>
                            <li>Contact & Help</li>
                        </ul>
                    </Box>
                    <Box>
                        <ul><strong>Company</strong>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Partners</li>
                            <li>Code of Conduct</li>
                        </ul>
                    </Box>
            </Box>
            <Box>
                <Box>
                    <Button label="Blinkist 2021"/> |
                    <Button label="Sitemap"/> |
                    <Button label="Disclaimer"/> |
                    <Button label="Terms of service"/> |
                    <Button label="Privacy Policies"/>
                </Box>
            </Box>
                
        </Box>
    </>
    );
};

export default Footer;