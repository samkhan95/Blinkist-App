import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import img from './blinkist.png';
import { Avatar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandNav from '../../molecules/Expandnav/ExpandNav';


const Header = ()=>{
    
    return (
        <>
            <Box sx={{flexGrow:1,mr:4}}>
                <AppBar position='static' sx={{bgcolor:'#FFFFFF'}} elevation={0}>
                    <Toolbar>
                        <img src={img} width="124.09px" height="60px" alt="logo" />
                        <IconButton>
                            <SearchIcon sx={{ml:4,mr:4,color:'#03314B'}} fontSize='large' />
                        </IconButton>
                        <ExpandNav/>
                        <Typography variant="body1" component="h6" fontSize={16} sx={{color:'#03314B',flexGrow:1,ml:4}}>
                            My Library
                        </Typography>
                        <Button sx={{mr:10,flexShrink:1}}>
                            <Avatar sx={{bgcolor:'#69A6E3'}}>A</Avatar>
                            <ExpandMoreIcon sx={{color:'#03314B'}}/>
                        </Button>   

                    </Toolbar>

                </AppBar>
            </Box>
            
        </>
    );
}

export default Header;