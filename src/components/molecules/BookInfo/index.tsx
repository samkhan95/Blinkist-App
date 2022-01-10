import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material';



const StyledTab = styled(Tab)`
  text-transform:none;
  font-size:16px;
  width:32%;
  font-family:Cera Pro;
  color:black;

`;


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BookInfo() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} sx={{maxWidth:600}}
            indicatorColor="primary"
        >
          <StyledTab disableRipple label={<Box sx={{display:'flex',justifyContent:'flex-start',color:'black'}}><Typography fontFamily='Cera Pro'>Sypnosis</Typography></Box>} {...a11yProps(0)}  />
          <StyledTab disableRipple label={<Box sx={{display:'flex',justifyContent:'flex-start',color:'black'}}><Typography fontFamily='Cera Pro'>Who is it for?</Typography></Box>}{...a11yProps(1)} />
          <StyledTab disableRipple label={<Box sx={{display:'flex',justifyContent:'flex-start',color:'black'}}><Typography fontFamily='Cera Pro'>About the author</Typography></Box>} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
          <Typography sx={{fontFamily:'Cera Pro'}}>
                Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, 
                Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text,
                supplemented with cutting-edge insights and case studies pertinent to today’s business world.
          </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
      
      </TabPanel>
      <TabPanel value={value} index={2}>
        
      </TabPanel>
    </Box>
  );
}
