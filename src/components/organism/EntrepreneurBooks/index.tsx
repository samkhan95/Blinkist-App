import { Box, Container, Grid, Typography } from "@mui/material";
import BookCard from "../../molecules/BookCard";
import books from "../../../data/db.json";

export const EBooks =()=>{
    return(
      <>
      <Box sx={{maxWidth:1440,maxHeight:2856,ml:1}}>
          <Container sx={{width:923}}>
                <Box>
                  <Typography fontFamily="Cera Pro" fontSize="24px" sx={{color:'#03314B',width:194,height:30,mb:"20px"}}>
                    Trending Blinks
                  </Typography>
                    
                </Box>
              <Grid container rowSpacing='25px' columnSpacing={{ xs: 12, sm: 12, md: 12 }}>
                {books.map((book) => (
                  <BookCard {...book} />
                ))}
              </Grid>
          </Container>
        </Box>

        </>

    );
}