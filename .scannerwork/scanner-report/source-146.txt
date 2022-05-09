import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Box, Container, Divider, Typography } from "@mui/material";

export const SearchField = ()=>{
    return(
        // <Box sx={{width:1440,mb:'80px'}}>
            <Container>
                    <Box sx={{ml:1.5,mb:'80px'}} data-testid="search">
                        <Box sx={{display:'flex',alignItems:'center',mb:'16px',justifyContent:'space-between',width:330,height:30}}>
                            <SearchIcon  fontSize="large"/>
                            <Typography fontFamily='Cera Pro' fontWeight="700" variant="h3" sx={{color:'#6D787E',fontSize:'24px'}}>
                                Search by title or author
                            </Typography>

                        </Box>
                        <Box sx={{width:658}}>
                            <Divider sx={{border:'2px solid #6D787E',bgcolor:'#6D787E'}}/>

                        </Box>
                    </Box>

            </Container>




    );

}