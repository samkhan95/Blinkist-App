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
import { Collapse, IconButtonProps, styled } from "@mui/material";
import { ExpandNav } from '../../molecules/Expandnav/ExpandNav';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  export default function Header() {
    const [value, setValue] = React.useState(0);

    // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    //   setValue(newValue);
    // };
     const [expanded, setExpanded] = React.useState(false);

  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };


    return (
        <>
            <Box sx={{flexGrow:1}}>
                <AppBar position='static' sx={{bgcolor:'#FFFFFF'}} elevation={0}>
                    <Toolbar>
                        <img src={img} width="124.09px" height="60px" alt="logo" />
                        <IconButton>
                            <SearchIcon sx={{ml:4,mr:4,color:'#03314B'}} fontSize='large' />
                        </IconButton>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <Typography sx={{color:"black",cursor:'pointer'}} fontSize={16}>
                                    Explore
                            </Typography>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                >
                                <ExpandMoreIcon sx={{color:'black',cursor:'pointer',ml:-0.5}}/>
                                                        
                            </ExpandMore>  
                        </Box>
                        <Typography variant="body1" component="h6" fontSize={16} sx={{color:'#03314B',flexGrow:1,ml:4}}>
                            My Library
                        </Typography>
                        <Box>
                            <Tabs onClick={handleExpandClick} TabIndicatorProps={{style:{display:'none'}}}>
                            <Tab label="Item One" />
                            </Tabs>
  
                        </Box>
                        
                        <Button sx={{mr:10,flexShrink:1}}>
                            <Avatar sx={{bgcolor:'#69A6E3'}}>A</Avatar>
                            <ExpandMoreIcon sx={{color:'#03314B'}}/>
                        </Button>   

                    </Toolbar>

                </AppBar>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <ExpandNav/>
                {/* <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                    aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                    medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                    occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                    large plate and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                    stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography> */}
            </Collapse>
        </>
    );
}
