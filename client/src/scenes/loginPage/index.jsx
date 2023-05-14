import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import Avatar from '@mui/material/Avatar';
import {logo } from "../../assets"

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        {/* <Typography fontWeight="bold" fontSize="32px" color="primary">
          Pragati by Peerless
        </Typography> */}
        <img src= {logo} width="30%" alt="Pragati by Peerless logo" />
      </Box>

      <Box
        width={isNonMobileScreens ? "30%" : "90%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Box 
          width={"100%"}
          textAlign="center"
          alignItems="center"
          direction="column"
          justifyContent="center"
          display= 'flex'
        >
        <Avatar sx={{ m: 1 , bgcolor: 'primary.main' }} />
        </Box>
        <Box
          width={"100%"}
          textAlign="center"
        >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Sign In
        </Typography>
        </Box>
        

        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
