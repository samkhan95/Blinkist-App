import React from "react";
import BookCard from "../../molecules/BookCard";
import { Box, Container } from "@mui/material";
import { RootStateOrAny, useSelector } from "react-redux";

const Finished = () => {
  const AddToFinish = useSelector((state:RootStateOrAny) => state.AddToFinish);
  return(
      <>
      <Box sx={{maxWidth:1440,maxHeight:1443}} data-testid="finished">
          <Container sx={{width:923,ml:-6}}>
              {AddToFinish && <BookCard title="Beyond Entrepreneurship" author="Jim Collins & Bill Lazier" time="13" image="/images/img2.png" progress={320}/>}
          </Container>
        </Box>
        
      
      </>

  );
}

export default Finished;