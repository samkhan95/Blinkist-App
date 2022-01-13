import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Button, Container, Typography,Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import img from './blinkist.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandNav from '../../molecules/Expandnav';
import { Link } from 'react-router-dom';


const Header = ()=>{
    
    return (
        <>
        <Container>
            <Box sx={{flexGrow:1}} data-testid="header">
                <AppBar position='static' sx={{bgcolor:'#FFFFFF'}} elevation={0}>
                    <Toolbar >
                        <Link to="/"><img src={img} width="124.09px" height="60px" alt="logo" /></Link>
                        <IconButton>
                            <SearchIcon sx={{ml:4,mr:4,color:'#03314B'}} fontSize='large' />
                        </IconButton>
                        <ExpandNav/>
                        <Typography variant="body1" component="h6" fontSize={16} sx={{color:'#03314B',ml:4,minWidth:80}}>
                            My Library
                        </Typography>
                        <Box sx={{minWidth:700,textAlign:'right'}}>
                            <Button sx={{flexShrink:1}}>
                                <Avatar sx={{bgcolor:'#69A6E3'}}>A</Avatar>
                                <ExpandMoreIcon sx={{color:'#03314B'}}/>
                            </Button> 
                            
                        </Box>  

                    </Toolbar>

                </AppBar>
            </Box>
        </Container>
            
        </>
    );
}

export default Header;



