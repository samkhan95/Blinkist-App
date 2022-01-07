import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {styled } from "@mui/material";

const AntTabs = styled(Tabs)({
  borderBottom: '3px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: 'green',
    height:3,
    borderRadius:2,

  },
});


export const StyledTab = styled(Tab)`
  font-size:18px;
  padding-left:5;

`;

export default function BookState() {
  return (
    <Box sx={{ width:921,mt:6,display:'flex', alignItems:'center'}}>
      <Box>
        <AntTabs value={0} style={{textDecorationColor:'green'}}>
          <StyledTab label={<span style={{ color: 'green',textTransform:'capitalize' }}>Currently <span style={{textTransform:'lowercase'}}>reading</span></span>} sx={{ minWidth: "42%", }} />
          <StyledTab label={<span style={{textTransform:'lowercase' }}> finished </span>}/>
        </AntTabs>
      </Box>
    </Box>
  );
}
