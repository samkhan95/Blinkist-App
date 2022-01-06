import { IconButton, SvgIconProps } from "@mui/material";

export interface IconButtonProps{
  children:SvgIconProps;
  onClick?:React.MouseEvent;

}

const IconButtonComponent = ({children}:IconButtonProps) =>(
    <IconButton>
      {children}
    </IconButton>
  );

export default IconButtonComponent;