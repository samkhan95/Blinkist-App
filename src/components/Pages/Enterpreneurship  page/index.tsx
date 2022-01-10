import React from "react";
import { SearchField } from "../../molecules/SearchBar";
import { Banner } from "../../organism/Banner";
import { EBooks } from "../../organism/EntrepreneurBooks";
import Footer from "../../organism/Footer";
import Header from "../../organism/Header";



export const Entrepreneurship =()=>{
    return(
        <>
        
        <Header/>
        <Banner/>
        <SearchField/>
        <EBooks/>
        <Footer/>
        
        </>




    );



}