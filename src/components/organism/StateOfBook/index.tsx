import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container, styled } from '@mui/material';
import { BookList } from '../BookList';
import Finished from '../../Pages/Finished';



const StyledTab = styled(Tab)`
  text-transform:none;
  font-size:18px;
  width:40%;
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

export default function BookState() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
          <Box sx={{width:1440,mt:'70px'}}>
              <Container sx={{width:921,height:1563}}>
                  <Box sx={{width:200,height:45,mb:'60px'}}>
                          <Typography variant="h1" sx={{ fontSize: 36, fontWeight: 700,fontFamily:"Cera Pro",ml:2.5 }}>
                            My Library
                          </Typography>
                  </Box>
                  <Box sx={{ width: '100%',ml:2.3 }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <Tabs value={value} onChange={handleChange} sx={{maxWidth:'921px'}}
                          textColor='primary'
                          indicatorColor="primary"
                      >
                        <StyledTab disableRipple label={<Box sx={{display:'flex',justifyContent:'flex-start',width:'340px'}}><Typography fontFamily='Cera Pro'>Currently reading</Typography></Box>}  />
                        <StyledTab disableRipple label={<Box sx={{display:'flex',justifyContent:'flex-start',width:'340px'}}><Typography fontFamily='Cera Pro'>Finished</Typography></Box>} />
                      </Tabs>
                    </Box>
                    <TabPanel value={value} index={0} >
                        {value === 0 && <BookList/>}
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      {value ===1 && <Finished/>}
                    </TabPanel>
                  </Box>
                  
              </Container>
        </Box>

  );
}
