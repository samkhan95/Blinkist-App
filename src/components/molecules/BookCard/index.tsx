import React from 'react';
import Card from '@mui/material/Card';
import { Box, CardMedia, ListItem, ListItemIcon } from '@mui/material';
import { Typography } from '@mui/material';
import { CardContent} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';
interface cardprops{
    img:string;
    title:string;
    author:string;
    time:string;

}

const BookCard:React.FC<cardprops> = ({img,title,author,time}) => {
    return (
        <>
            <Card  sx={{
                width:284,height:466,
                borderRadius:2,
                border: '1 solid #E1ECFC',
                background: "#FFFFFF",
                }}>
                    <CardMedia 
                            component="img"
                            image={img}
                            alt="book pic"
                        
                        />
                    <CardContent sx={{height:95,width:255}}>
                        <Typography  sx={{
                        width:187,
                        height:23,
                        fontFamily:'Cera Pro',
                        fontWeight: 'bold',
                        fontSize: 18,
                        position: 'static',
                        textAlign:'left',
                        }}
                         variant="subtitle1"  color='#03314B' component="h6">
                            {title}
                        </Typography>
                        <br/>
                        <Typography sx={{
                            height:20,
                            width:145,
                            fontFamily:'Cera Pro',
                            fontSize:16,
                            textAlign:'left'
                            }} 
                            color="#6D787E" variant='body1'>
                            {author}
                        </Typography>
                        <br/>
                        <Box sx={{display:"flex",height:20,width:180,}}>
                            <ListItem>
                                <ListItemIcon sx={{color:"#6D787E",ml:-2}}>
                                    <AccessTimeIcon fontSize='small'/></ListItemIcon>
                                <Typography sx={{fontSize:14,fontFamily:'Cera Pro',ml:-4}} variant='caption' color="#6D787E">{time}</Typography>
                            </ListItem>
                            
                            
                        </Box>
                        <Box sx={{display:'flex',float:'right',height:24,width:24,color:'#042330',mt:3}}>
                                    <IconButton>
                                    <strong> <MoreHorizIcon fontSize='medium'/></strong>
                                    </IconButton>
                        </Box>
                    </CardContent>
                     <Box sx={{
                         width:283,height:15,
                         border: '1px solid #E1ECFC',
                         mt:5.3,bgcolor:'#F1F6F4',
                         boxSizing:'border-box',
                         }}>

                     </Box>

                    
            </Card>


        </>
    );
};

export default BookCard;