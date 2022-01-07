import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, IconButton, IconButtonProps, Stack, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Container } from '@mui/material';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import {FaBullseye, FaChartLine, FaHistory, FaHourglassEnd, FaLandmark, FaLeaf, FaMedal, FaRegHospital, FaRegLightbulb} from "react-icons/fa"
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';
import FiberSmartRecordOutlinedIcon from '@mui/icons-material/FiberSmartRecordOutlined';


const style = {
  position: 'absolute' as 'absolute',
  top: '47%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1440,
  height:398,
  bgcolor: '#F1F6F4',
  border: '2px solid #000',
};

const FBox = styled(Box)`
  display:flex;
  align-items:center;
  &:hover{
    color:#116BE9;

  }
`;

const Constyle = {
  maxWidth:940,
  height:398,
  pt:'30px',
  pb:'32px',
}

const HeadTypography = styled(Typography)`
  font-size:16px;
  font-weight:bold;
  font-family:Cera Pro;
  color:#6D787E;
  &:hover{
    color:#116BE9;
  }
`;

const StyledTypography = styled(Typography)`
  font-size:16px;
  font-weight:400;
  font-family:Cera Pro;
  color:#6D787E;
  &:hover{
    color:#116BE9;

  }
`;

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

const UBox = styled(Box)`
  &:hover{
      border-bottom-color:green;
  }
`;

   
export default function ExpandNav() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <>
        <Button onClick={handleOpen}>
          <UBox sx={{display:'flex',alignItems:'center',borderBottom:'4px solid white'}}>
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
                          
          </UBox>

        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Container sx={Constyle}>
              <Stack direction='row' spacing='130px' sx={{pb:'24px'}}>
                  <HeadTypography >
                    Explore by category
                  </HeadTypography>
                  <HeadTypography >
                    See recently added titles
                  </HeadTypography>
                  <HeadTypography >
                    See popular titles
                  </HeadTypography>
              </Stack> 
              <Divider sx={{ border:'1px solid black'}}/> 
              <Box sx={{pt:'32px',maxWidth:880, display:'flex',justifyContent:'space-between'}}>
                <Stack direction='column' spacing='20.11px'>
                  <FBox>
                      <NotificationImportantOutlinedIcon fontSize='small'/>
                      <StyledTypography >
                        Entrepreneurship
                      </StyledTypography >

                  </FBox>

                  <FBox>
                      <ScienceOutlinedIcon fontSize='small'/>
                      <StyledTypography >
                        Science
                      </StyledTypography >
                  </FBox>
                  <FBox>
                      <FiberSmartRecordOutlinedIcon fontSize='small'/>
                      <StyledTypography >
                        Economics
                      </StyledTypography >
                  </FBox>
                  <FBox >
                      <BusinessCenterSharpIcon fontSize='small'/>
                      <StyledTypography >
                        Corporate Culture
                      </StyledTypography >
                  </FBox>
                  <FBox>
                    <PsychologyOutlinedIcon fontSize='small'/>
                    <StyledTypography >
                      Psychology
                    </StyledTypography >
                  </FBox>
                  <FBox>
                    <FaLeaf/>
                    <StyledTypography >
                      Nature & Environment
                    </StyledTypography >
                  </FBox>
                </Stack>
              <Stack direction='column' spacing='20.11px'>
                  <FBox>
                    <FaLandmark/>
                    <StyledTypography >
                      Politics
                    </StyledTypography >
                  </FBox>
                  <FBox>
                    <FaRegHospital/>
                    <StyledTypography >
                      Health & Nutrition
                    </StyledTypography >
                  </FBox>
                  <FBox>
                      <FaHistory/>
                      <StyledTypography >
                        History
                      </StyledTypography >
                  </FBox>
                  <FBox>
                      <FaRegLightbulb/>
                      <StyledTypography >
                        Motivation & Inspiration
                      </StyledTypography >
                  </FBox>
                  <FBox>
                      <FaHourglassEnd/>
                      <StyledTypography >
                        Productivity
                      </StyledTypography >
                  </FBox>
                  <FBox>
                      <FaBullseye/>
                      <StyledTypography >
                        Career & Success
                      </StyledTypography >
                  </FBox>
              </Stack>
              <Stack direction='column' spacing='20.11px'>
                  <FBox>
                      <FaChartLine/>
                      <StyledTypography >
                        Marketing & Sales
                      </StyledTypography >
                  </FBox>
                  <FBox>
                      <SignalCellularAltIcon fontSize='small'/>
                      <StyledTypography >
                        Personal Development
                      </StyledTypography >
                  </FBox>
                  <FBox>
                    <SmsOutlinedIcon fontSize='small'/>
                    <StyledTypography >
                      Communication Skills
                    </StyledTypography >
                  </FBox>
                  <FBox>
                    <AccountBalanceWalletOutlinedIcon fontSize='small'/>
                    <StyledTypography >
                      Money & Investments
                    </StyledTypography >
                  </FBox>
                  <FBox>
                      <FavoriteBorderOutlinedIcon fontSize='small'/>
                      <StyledTypography >
                        Sex & Relationship
                      </StyledTypography >
                  </FBox>
                  <FBox>
                      <SchoolOutlinedIcon fontSize='small'/>
                      <StyledTypography >
                        Education
                      </StyledTypography >
                  </FBox>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Modal>
    </>
  );
}
