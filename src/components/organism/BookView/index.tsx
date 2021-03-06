import { Box,Button,Container, Stack, styled, Typography } from "@mui/material";
import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import img from './photo.png';
import BookInfo from "../BookInfo";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddToFinish } from "../../../actions";

const StyledTypography = styled(Typography)`
    font-family:Cera Pro;
`;
const StyledButton = styled(Button)`
    height:44;
    width:178;
    color:#03314B;
    borderRadius:4px;
    fontSize:16px;
    background-color:#2CE080;
    
    &:hover{
        background-color:green;
    }

`;


const BookView = ()=>{
    const dispatch = useDispatch();

    return(
        <>
    
        {/* <Box sx={{maxWidth:1440,maxHeight:1443,mt:'80px',ml:3}}> */}
            <Container sx={{mt:'80px'}} data-testid="bview">
                    <Box sx={{width:180,height:20,mb:'40px',ml:4}}>
                            <StyledTypography variant="body2" fontSize="16px"sx={{color:'#03314B'}} >
                                Get the key ideas from
                            </StyledTypography>
                    </Box>
                <Box sx={{display:'flex',justifyContent:'space-between',mb:"70px",ml:4}}>
                    <Box>
                    <Box sx={{width:496,height:45,mb:'24px'}}>
                        <StyledTypography variant="h1" fontSize="36px" fontWeight={700}   sx={{color:'#03314B'}} >
                            Beyond Entrepreneurship 2.0
                        </StyledTypography>
                    </Box>
                    <Box sx={{width:519,height:25,mb:'24px'}}>
                        <StyledTypography variant="subtitle3" fontSize="20px" fontWeight={400}   sx={{color:'#03314B'}} >
                            Turning Your Business into an Enduring Great Company
                        </StyledTypography>
                    </Box>
                    <Box sx={{width:219,height:20,mb:'19px'}}>
                        <StyledTypography variant="body1" fontSize="16px" fontWeight={400}   sx={{color:'#6D787E'}} >
                            By Jim Collins and Bill Lazier
                        </StyledTypography>
                    </Box>
                    <Box sx={{width:128,height:24,display:'flex',alignItems:'center',mb:'90px'}}>
                        <AccessTimeIcon fontSize="small"/>
                        <StyledTypography variant="caption2" fontSize="14px" fontWeight={400}   sx={{color:'#6D787E'}} >
                        15-minute read
                        </StyledTypography>
                    </Box>
                    <Stack direction="row" spacing={3}>
                            <Button sx={{border:'1px solid #042330',height:44,width:122,color:'#22C870',borderRadius:'4px',fontSize:'16px'}}>Read Now</Button>
                            <Link data-testid="viewlink" to="/" style={{textDecoration:'none'}}><StyledButton onClick={() => dispatch(AddToFinish())}>Finished Reading</StyledButton></Link>
                            <Box sx={{display:'inline-flex',alignItems:'center'}}>
                                <Button sx={{fontSize:'16px',color:'#03314B'}}>Send to Kindle</Button>
                                <ArrowRightAltOutlinedIcon/>
                            </Box>
                    </Stack>
                </Box>
                <Box>
                    <img src={img} alt="book pic" width={304} height={304}/>
                </Box>
            </Box>
            
            <BookInfo/>

          </Container>
                
    </>

    );
    
}


export default BookView;