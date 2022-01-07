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
        <Container sx={{width:1440}}>
        <Box sx={{bgcolor:'#F1F6F4',mt:10,pt:10,height:300}}>
            <Box sx={{display:'flex',justifyContent:'space-around'}}>
                <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                    <Box sx={{width:'99px',height:'24px'}}>
                        <img src={img1} alt="Blinkist logo" width={119} height={54} />
                    </Box>
                    <Box sx={{mb:2}}>
                        <Typography variant='subtitle1' sx={{fontSize:24,color:'blue',fontWeight:500}}>Big ideas in small packages </Typography> 
                        <Typography variant='subtitle1' sx={{fontSize:24,color:'blue',fontWeight:500}}>Start learning now</Typography>
                    </Box>
                </Box>
                    <Box>
                        <StyledTypography sx={{color:'black'}}><strong>Editorial</strong></StyledTypography>
                            <StyledTypography>Book lists</StyledTypography>
                            <StyledTypography>What is Nonfiction?</StyledTypography>
                            <StyledTypography>What to Read Next?</StyledTypography>
                            <StyledTypography>Benefits of Reading</StyledTypography>
                    </Box>
                    <Box>
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
                <Box sx={{textAlign:'center', ml:-4,pt:5}}>
                    <Button label="Blinkist 2021"/> |
                    <Button label="Sitemap"/> |
                    <Button label="Disclaimer"/> |
                    <Button label="Terms of service"/> |
                    <Button label="Privacy Policies"/>
                </Box>
                
        </Box>
        </Container>
    </>
    );
};

export default Footer;