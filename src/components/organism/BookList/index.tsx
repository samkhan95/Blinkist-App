import { Box, Container, Grid } from "@mui/material";
import BookCard from "../../molecules/BookCard";
import books from "../../../data/db1.json";

export const BookList =()=>{
    return(
      <>
      <Box sx={{maxWidth:1440,maxHeight:1443}}>
          <Container sx={{width:923,ml:-6}}>
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