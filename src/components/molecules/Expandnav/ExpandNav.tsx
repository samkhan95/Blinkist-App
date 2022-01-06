import React from "react";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import Stack from '@mui/material/Stack';
import { Box } from "@mui/system";

export const ExpandNav = ()=>{
  return(
    <Box sx={{width:1900,height:398,bgcolor:'#F1F6F4',zIndex:100,pl:5,pt:5,pb:3}}>
      <Stack direction='row' spacing={20} sx={{mb:2}} >
        <Typography variant="subtitle2" fontSize={16}>
            Explore by category
        </Typography>
        <Typography variant="subtitle2" fontSize={16}>
          See recently added titles
        </Typography>
        <Typography variant="subtitle2" fontSize={16}>
          See popular titles
        </Typography>
      </Stack>
      <Divider sx={{width:900,border: '1px solid #042330'}}/>





    </Box>



  );

}