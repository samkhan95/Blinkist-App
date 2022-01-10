import { Box, styled, Typography } from '@mui/material';
import Button from '../../atoms/Button';
import img1 from './blinkist.png';
import { Container } from '@mui/material';

export const StyledTypography = styled(Typography)`
    line-height:2;
    font-size:16;
    font-family:Cera Pro;
    color:#6D787E;

`;



const Footer = () => {
    return (
        <>
        <Box sx={{bgcolor:'#F1F6F4',maxWidth:1440,maxHeight:370,mt:'111px'}}>
            <Container sx={{width:1040}}>
                <Box sx={{bgcolor:'#F1F6F4',pt:'38px',height:300}}>
                    <Box sx={{display:'flex',justifyContent:'space-around'}}>
                        <Box>
                            <Box sx={{width:'99px',height:'24px',pb:'32px'}}>
                                <img src={img1} alt="Blinkist logo" width='99.1px' height='44px' />
                            </Box>
                            <Box sx={{pb:'132px'}}>
                                <Typography variant='subtitle1' sx={{fontSize:24,color:'#0365F2',fontWeight:500}}>Big ideas in small packages </Typography> 
                                <Typography variant='subtitle1' sx={{fontSize:24,color:'#0365F2',fontWeight:500}}>Start learning now</Typography>
                            </Box>
                        </Box>
                            <Box>
                                <StyledTypography sx={{color:'black'}}><strong>Editorial</strong></StyledTypography>
                                    <StyledTypography>Book lists</StyledTypography>
                                    <StyledTypography>What is Nonfiction?</StyledTypography>
                                    <StyledTypography>What to Read Next?</StyledTypography>
                                    <StyledTypography>Benefits of Reading</StyledTypography>
                            </Box>
                            <Box sx={{pl:2.7}}>
                                <StyledTypography sx={{color:'black'}}><strong>Useful links</strong></StyledTypography>
                                    <StyledTypography>Pricing</StyledTypography>
                                    <StyledTypography>Blinkist Business</StyledTypography>
                                    <StyledTypography>Gift Cards</StyledTypography>
                                    <StyledTypography>Benefits of Reading</StyledTypography>
                                    <StyledTypography>Blinkist Magazine</StyledTypography>
                                    <StyledTypography>Contact & Help</StyledTypography>
                            </Box>
                            <Box>
                                <StyledTypography sx={{color:'black'}}><strong>Company</strong></StyledTypography>
                                    <StyledTypography>About</StyledTypography>
                                    <StyledTypography>Careers</StyledTypography>
                                    <StyledTypography>Partners</StyledTypography>
                                    <StyledTypography>Code of Conduct</StyledTypography>
                            </Box>
                    </Box>
                        <Box>
                            <Button color='black' children="Blinkist 2021"/> |
                            <Button color='black' children="Sitemap"/> |
                            <Button color='black' children="Disclaimer"/> |
                            <Button color='black' children="Terms of service"/> |
                            <Button color='black' children="Privacy Policies"/>
                        </Box>
                        
                </Box>
            </Container>
        </Box>
    </>
    );
};

export default Footer;