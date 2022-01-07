import { createTheme } from '@mui/material/styles';


declare module '@mui/material/styles' {
    interface TypographyVariants {
      body3: React.CSSProperties;
      subtitle3: React.CSSProperties;
      caption2: React.CSSProperties;
    }
  
    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
      body3?: React.CSSProperties;
      subtitle3: React.CSSProperties;
      caption2: React.CSSProperties;
    }
  }
  declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      body3: true;
      subtitle3:true;
      caption2: true;
    }
  }


const theme = createTheme({
  palette: {
    primary: {
      main: "#2CE080",
    },
    secondary: {
      main: '#0365F2',
    }
  },
    
});

export default theme;