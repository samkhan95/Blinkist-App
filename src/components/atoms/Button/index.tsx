import { Button } from "@mui/material";


export interface ButtonProps{
  variant?:"text" | "outlined" | "contained" | undefined;
  size?:"small" | "medium" | "large" | undefined;
  children:any;
  color?:string;
  onClick?: ()=>void;
  hoverColor?:string;
  
}


const ButtonComponent = ({variant,children,hoverColor,color,size,onClick}:ButtonProps) => {
  return(
    <Button size={size} variant={variant} data-testid="2" onClick={onClick} 
    sx={{color:{color},textTransform:'none',fontSize:'14px'}}>
      {children}
    </Button>
    );
}
export default ButtonComponent;