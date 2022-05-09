import { Box, Container, styled, Typography } from "@mui/material";
import img from './bannerImage.png'

const StyledTypography = styled(Typography)`
    font-family:Cera Pro;
    font-weight:700;
    color:#03314B;
    font-size:36px
`;


export const Banner =()=>{
    return(
        <>  
        {/* <Box sx={{width:1440,mb:'58px'}}> */}
                <Container sx={{width:1145,mt:'52px'}}>
                    <Box sx={{height:264,bgcolor:'#F1F6F4',display:'flex',justifyContent:"space-around",mb:'58px'}} data-testid="banner">
                        <Box >
                            <Box sx={{width:319,height:90,mt:"45px",mb:'15px'}}>
                                <StyledTypography variant="h1"> 
                                    Explore Books on entrepreneurship
                                </StyledTypography>
                            </Box>
                            <Box sx={{width:461,height:69}}>
                                <Typography variant="subtitle2" fontSize="18px" fontFamily="Cera Pro" fontWeight="400">
                                Everything you need to know about thriving on a
                                shoestring budget, making your first million, and hiring 
                                right from the start.
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{width:249,height:230,mt:"17px"}}>
                                <img src={img} alt="Banner-img"  height={230} width={249}/>

                        </Box>

                     </Box>

                </Container>
            
        </>





    );
}