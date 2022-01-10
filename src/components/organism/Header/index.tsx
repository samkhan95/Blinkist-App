import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Button, Container, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import img from './blinkist.png';
import { Avatar } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandNav from '../../molecules/Expandnav/ExpandNav';
import { Link } from 'react-router-dom';


const Header = ()=>{
    
    return (
        <>
        <Box sx={{width:1440,height:86}}>
            <Container sx={{width:924}}>

        
            <Box sx={{flexGrow:1}}>
                <AppBar position='static' sx={{bgcolor:'#FFFFFF'}} elevation={0}>
                    <Toolbar sx={{width:924}}>
                        <Link to="/"><img src={img} width="124.09px" height="60px" alt="logo" /></Link>
                        <IconButton>
                            <SearchIcon sx={{ml:4,mr:4,color:'#03314B'}} fontSize='large' />
                        </IconButton>
                        <ExpandNav/>
                        <Typography variant="body1" component="h6" fontSize={16} sx={{color:'#03314B',ml:4,minWidth:80}}>
                            My Library
                        </Typography>
                        <Box sx={{minWidth:500,textAlign:'right'}}>
                            <Button sx={{flexShrink:1}}>
                                <Avatar sx={{bgcolor:'#69A6E3'}}>A</Avatar>
                                <ExpandMoreIcon sx={{color:'#03314B'}}/>
                            </Button> 
                            
                        </Box>  

                    </Toolbar>

                </AppBar>
            </Box>
        </Container>
        </Box>
            
        </>
    );
}

export default Header;







{/* <Box sx={{flexGrow:1}}>
                <AppBar position='static' sx={{bgcolor:'#FFFFFF'}} elevation={0}>
                    <Toolbar sx={{width:924}}>
                        <Link to="/"><img src={img} width="124.09px" height="60px" alt="logo" /></Link>
                        <IconButton>
                            <SearchIcon sx={{ml:4,mr:4,color:'#03314B'}} fontSize='large' />
                        </IconButton>
                        <ExpandNav/>
                        <Typography variant="body1" component="h6" fontSize={16} sx={{color:'#03314B',flexGrow:1,ml:4}}>
                            My Library
                        </Typography>
                        <Button sx={{flexShrink:1}}>
                            <Avatar sx={{bgcolor:'#69A6E3'}}>A</Avatar>
                            <ExpandMoreIcon sx={{color:'#03314B'}}/>
                        </Button>   

                    </Toolbar>

                </AppBar>
            </Box> */}