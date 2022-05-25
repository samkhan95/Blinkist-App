import React from "react";
import { IconButton, SvgIconProps } from "@mui/material";

export interface IconButtonProps{
  children:SvgIconProps;
  onClick?:React.MouseEvent;

}

const IconButtonComponent = ({children}:IconButtonProps) =>(
    <IconButton data-testid="3">
      {children}
    </IconButton>
  );

export default IconButtonComponent;