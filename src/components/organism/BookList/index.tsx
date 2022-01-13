import { Box, Container, Grid } from "@mui/material";
import BookCard from "../../molecules/BookCard";
import books from "../../../data/db1.json";

export const BookList =()=>{
    return(
      <>
      {/* <Box sx={{maxWidth:1440,maxHeight:1443}}> */}
          <Container>
            <Box sx={{ml:-5}} data-testid="blist">
              <Grid container rowSpacing='25px'>
                  {books.map((book) => (
                    <BookCard {...book} />
                  ))}
                </Grid>
            </Box>
            
          </Container>

        </>

    );
}