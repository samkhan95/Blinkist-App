import { Avatar, styled } from "@mui/material";

export interface AvatarProps{
    label:string;
}

const BlueAvatar = styled(Avatar)`
  background-color: #69A6E3 ;
`;
const AvatarComponent = ({label}:AvatarProps)=>{
    return(
        <BlueAvatar>
            {label}
        </BlueAvatar>
    );
}

export default AvatarComponent;
