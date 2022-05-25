import React, { ReactNode } from "react";
import { Button } from "@mui/material";


export interface ButtonProps{
  variant?:"text" | "outlined" | "contained";
  size?:"small" | "medium" | "large";
  children:ReactNode;
  color?:string;
  onClick?: ()=>void;
  hoverColor?:string;
  
}


const ButtonComponent = ({variant,children,color,size,onClick}:ButtonProps) => {
  return(
    <Button size={size} variant={variant} data-testid="2" onClick={onClick} 
    sx={{color:{color},textTransform:'none',fontSize:'14px'}}>
      {children}
    </Button>
    );
}
export default ButtonComponent;