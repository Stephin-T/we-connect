import { Box, Typography, useTheme, useMediaQuery, IconButton} from '@mui/material';
import React,{useState} from 'react';
import Form from "./Form";
import { DarkMode, LightMode,} from "@mui/icons-material";
import { setMode } from "state";
import { useDispatch} from "react-redux";

function LoginPage() {

  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const primaryLight = theme.palette.primary.light;
  const dark = theme.palette.neutral.dark;
  return (
    <Box>
    <Box width="100%" backgroundColor={theme.palette.background.alt}
      p = "1rem 6%"
      textAlign = "center"
    >
   <Typography 
          fontWeight="bold"
          fontSize="33px"
          color="primary"
          sx={{
            "&:hover": {
              content: `"${hovered && "We)onnect"}"`,
              cursor: "pointer",
            },
          }}
          onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
        >
         {hovered ? "We)onnect" : "We(onnect"}
          </Typography>
          
           

        </Box>
        <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500"textAlign="center" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to We(onnect
        </Typography>
        <Form />
        </Box>
    </Box>
  )
}

export default LoginPage;