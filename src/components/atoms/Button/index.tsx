import { Button } from "@mui/material";


export interface ButtonProps{
  variant?:"text" | "outlined" | "contained" | undefined;
  label:string;
  size?:"small" | "medium" | "large" | undefined;
  onClick?: React.MouseEvent<HTMLButtonElement> | undefined;
}
const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
  alert(event.target);
  console.log(text);
};

const ButtonComponent = ({variant,label,size}:ButtonProps) => {
  return(
    <Button size={size} variant={variant} onClick={(e)=>{handleClick(e,"clicked")}}>
      {label}
    </Button>
    );
}
export default ButtonComponent;