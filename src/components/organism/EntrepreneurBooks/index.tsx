import { Box, Container, Grid, Typography } from "@mui/material";
import BookCard from "../../molecules/BookCard";
import books from "../../../data/db.json";

export const EBooks =()=>{
    return(
      <>
      {/* <Box sx={{maxWidth:1440,maxHeight:2856,ml:1}}> */}
          <Container  data-testid="ebooks">
                <Box>
                  <Typography fontFamily="Cera Pro" fontSize="24px" sx={{color:'#03314B',width:194,height:30,mb:"20px",ml:2}}>
                    Trending Blinks
                  </Typography>
                    
                </Box>
              <Box sx={{ml:2}}>
                <Grid container rowSpacing='25px' columnSpacing={{ xs: 6, sm: 6, md: 6 }}>
                  {books.map((book) => (
                    <BookCard {...book} />
                  ))}
                </Grid>
              </Box>
          </Container>

        </>

    );
}