import { Box, Grid } from "@mui/material";
import BookCard from "../../molecules/BookCard";
import books from "../../../db1.json";
import { Typography } from "@mui/material";
import BookState from "../../molecules/Tabs";


export const BookList =()=>{
    return(
      <>
        <Box sx={{width:200,height:45,mt:4,mb:8}}>
        <Typography variant="h1" sx={{ fontSize: 36, fontWeight: 700,ml:2 }}>
          My Library
        </Typography>
        </Box>
        <Box sx={{}}>

        </Box>
        <Grid container spacing={5} sx={{mt:10,ml:-2}}>
          {books.map((book) => (
            <BookCard {...book} />
          ))}
        </Grid>
        
        
      </>



    );
}