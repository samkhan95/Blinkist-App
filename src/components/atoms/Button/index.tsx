import { Button } from "@mui/material";


export interface ButtonProps{
  variant?:"text" | "outlined" | "contained" | undefined;
  size?:"small" | "medium" | "large" | undefined;
  children:any;
  color?:string;
  onClick?: React.MouseEvent<HTMLButtonElement> | undefined;
  hoverColor?:string;
  
}
const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
  alert(event.target);
  console.log(text);
};

const ButtonComponent = ({variant,children,hoverColor,color,size}:ButtonProps) => {
  return(
    <Button size={size} variant={variant} onClick={(e)=>{handleClick(e,"clicked")}} 
    sx={{color:{color}}}>
      {children}
    </Button>
    );
}
export default ButtonComponent;