import { Box } from "@mui/system";
import React from "react";
import BookView from "../../organism/BookView";
import Footer from "../../organism/Footer";
import Header from "../../organism/Header";

export const BookDetailsView =()=>{
    return(

        <Box data-testid="detailspage">
            <Header/>
            <BookView/>
            <Footer/>
        
        
        </Box>


    );


}