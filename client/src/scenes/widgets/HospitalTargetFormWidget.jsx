import { Typography, Box, Stack, Divider } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";


import Avatar from '@mui/material/Avatar';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import CustomButton from "../../components/common/CustomButton"

const HospitalTargetFormWidget = ({propertyId})=>{

    const isCurrentUser = true; 
    const theme = createTheme();
    const navigate = useNavigate();

    const handleSubmit_tosh = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    };



    return (
        <>
        <Box
            borderRadius="15px"
            padding="20px"
            bgcolor="#FCFCFC"
            width="100%"
        >
            
            <Box
                mt="2px"
                display="flex"
                flexDirection={{ xs: "column", lg: "row" }}
                gap={4}
                
            >
                <Box flex={1} maxWidth={"100 %"}>
                    <Box mt="10px" mb="15px"
                    borderRadius="15px"
                    padding="2px"
                    bgcolor="#FFFFFF"
                    alignItems={"center"}
                    border="1px solid #E4E4E4"
                    >
    {/* <ThemeProvider theme={theme}> */}
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
            borderRadius:"15px",
                    padding:"2px",
                    bgcolor:"#FFFFFF"
          }}
        >
            <Typography fontSize={25} fontWeight={700} color="#11142D">
                Financial year 2023-24
            </Typography>
            <br/>
          <Box component="form" alignItems={"center"} noValidate onSubmit={handleSubmit_tosh} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Typography fontSize={20} fontWeight={400}>
                <u>Enter budget data:</u>
            </Typography>
            <Divider />
                <Grid item xs={12} >
                    Revenue in cr.
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount"> </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">Cr.</InputAdornment>}
                        //label="Revenue (in Cr.):"
                        type="Number"
                    />
                </FormControl>
                </Grid>


                <Grid item xs={12} >
                    PBT: (in cr.)
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">Cr.</InputAdornment>}
                        //label="Revenue (in Cr.):"
                        type="Number"
                    />
                </FormControl>

                </Grid>

                <Grid item xs={12} sm={6}>
                    EBIDTA: (in cr.)
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount"> </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">Cr.</InputAdornment>}
                        //label="Revenue (in Cr.):"
                        type="Number"
                    />
                </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                    Occupancy: (in percent.)
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount"> </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        endAdornment={<InputAdornment position="end">%.</InputAdornment>}
                        //label="Revenue (in Cr.):"
                        type="Number"
                    />
                </FormControl>
                </Grid>

                <Grid item xs={12}>
                    Average Length of Stay: (in days)
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount"> </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">Days</InputAdornment>}
                        //label="Revenue (in Cr.):"
                        type="Number"
                    />
                </FormControl>
                </Grid>

                <Grid item xs={12}>
                    &nbsp;
                    <Divider></Divider>
                </Grid>

                <Grid item xs={12}>
                    &nbsp;
                </Grid>

                <Typography fontSize={30} fontWeight={700}>
                    &nbsp;
                </Typography>
                <Divider></Divider>

            <Typography fontSize={20} fontWeight={400}>
                <u>Estimated Cash flow</u>
            </Typography>


            <Grid item xs={12} sm={12}>
                Op cash/ Bank Balance in INR:
            <TextField
                id="outlined-number"
                //label="Number"
                placeholder="Bank balance in INR" 
                type="number"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                />
            </Grid>

            <Grid item xs={12} sm={12}>
                Internal cash generation in INR:
            <TextField
                id="outlined-number"
                //label="Number"
                placeholder="Internal cash generation in INR" 
                type="number"
                fullWidth
                InputLabelProps={{
                    shrink: false,
                }}
                />
            </Grid>

            <Grid item xs={12} sm={12}>
                Major cash inflow in INR:
            <TextField
                id="cash-inflow"
                //label="Number"
                placeholder="Major cash inflow in INR" 
                type="number"
                fullWidth
                InputLabelProps={{
                    shrink: false,
                }}
                />
            </Grid>

            <Grid item xs={12} sm={12}>
                Major cash outflow in INR:
            <TextField
                id="cash-outflow"
                //label="Number"
                placeholder="Major cash outflow in INR" 
                type="number"
                fullWidth
                InputLabelProps={{
                    shrink: false,
                }}
                />
            </Grid>
            <Grid item xs={12}>
                <Divider></Divider>
                Closing Cash & Bank
                <TextField
                id="closing-cash"
                //label="Number"
                placeholder="" 
                type="number"
                fullWidth
                disabled
                InputLabelProps={{
                    shrink: false,
                }}
                value={"Autocalculated"}
                />
            </Grid>
            <Grid item xs={12}>
                <Divider></Divider>
            </Grid>


            {/* <Grid item xs={12} sm={12}>
                <TextField
                id="outlined-number"
                label="Number"
                type="number"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                />
            </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12}>
                Enter Revenue (in cr.): <TextField
                  required
                  fullWidth
                  id="email"
                  label="Revenue in cr."
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="The provided data is correct as per my knowledge."
                />
              </Grid> 
            
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>

            <Button
              type="cancel"
              fullWidth
              variant="link"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => navigate(`/property/show/${propertyId}`)} 

            >
              cencel
            </Button>
            
          </Box>
        </Box>

      </Container>
    {/* </ThemeProvider> */}
                    </Box>
                </Box>
                {/* // Right area */}
                
            </Box>
        </Box>
        </>
    )
}

export default HospitalTargetFormWidget