import React from 'react';
import Card from '@mui/material/Card';
import { Box, CardMedia, Grid, ListItem, ListItemIcon } from '@mui/material';
import { Typography } from '@mui/material';
import { CardContent} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
interface cardprops{
    id?:number;
    image:string;
    title:string;
    author:string;
    time:string;
    reads?:string | undefined;

}

const BookCard:React.FC<cardprops> = ({image,reads,title,author,time}) => {
    return (
        <Grid item xs={4}>
            <Card  sx={{
                width:285,height:466,
                borderRadius:2,
                border: '1 solid #E1ECFC',
                background: "#FFFFFF",
                }}>
                    <CardMedia 
                            component="img"
                            image={image}
                            alt="book pic"
                            height="292px"
                            width="294.1px"
                        
                        />
                    <CardContent sx={{height:95,width:255}}>
                        <Typography  sx={{
                        width:250,
                        height:23,
                        fontFamily:'Cera Pro',
                        fontWeight: 'bold',
                        fontSize: 18,
                        textAlign:'left',

                        }}
                         variant="subtitle1"  color='#03314B' component="h6">
                            {title}
                        </Typography>
                    
                        <Typography sx={{
                            height:20,
                            width:250,
                            fontFamily:'Cera Pro',
                            fontSize:16,
                            textAlign:'left',
                            mt:2,
                            }} 
                            color="#6D787E" variant='body1'>
                            {author}
                        </Typography>
                        <br/>
                        <Box sx={{display:"flex",justifyContent:"space-between"}}>
                            <Box sx={{display:"flex",alignItems:'center'}}>
                                        <AccessTimeIcon fontSize='small'/>
                                    <Typography sx={{fontSize:14,fontFamily:'Cera Pro'}} variant='caption2' color="#6D787E">{time}-minute read</Typography>
                                
                                
                            </Box>
                         {reads &&   <Box sx={{display:"flex",alignItems:'center'}}>
                                        <PersonOutlineIcon fontSize='small'/>
                                    <Typography sx={{fontSize:14,fontFamily:'Cera Pro'}} variant='caption2' color="#6D787E">{reads}</Typography>
                                
                                
                            </Box>}
                        </Box>
                        <Box sx={{display:'flex',float:'right',height:24,width:24,color:'#042330',mt:3}}>
                                    <IconButton>
                                    <strong> <MoreHorizIcon fontSize='medium'/></strong>
                                    </IconButton>
                        </Box>
                    </CardContent>
                     <Box sx={{
                         width:300,height:15,
                         bgcolor:'#F1F6F4',
                         mt:4.4,
                         boxSizing:'border-box',
                         }}>
                             <Box sx={{width:'88',height:'15', bgcolor:'#E1ECFC'}}>
                                
                             </Box>

                     </Box>

                    
            </Card>


            </Grid>
    );
};

export default BookCard;