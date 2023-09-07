import * as React from 'react';
import {Avatar, Box, Button, CssBaseline, Container, Grid, Link, TextField, Typography} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const defaultTheme = createTheme();

const SignUp = () => {
    const [isEnabled, setIsEnabled] = React.useState(true);
    const [isLowercase, setLowercase] = React.useState(false);
    const [isUppercase, setUppercase] = React.useState(false);
    const [isNumber, setNumber] = React.useState(false);
    const [isSpecialCh, setSpecialCh] = React.useState(false);
    const [isMinimumLen, setMinimumLen] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();
    
    const passwordValidator = (event: any) => {
        const {value} = event.target;
        // value.length >= 8 ? setMinimumLen(true) : setMinimumLen(false);
        // if (parseInt(value.length) > 0) {
        //     value === String(value).toLowerCase() ? setLowercase(false) : setLowercase(false);
        //     value === String(value).toUpperCase() ? setUppercase(true) : setUppercase(false);
        // }

        // Load value from utils
    };
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
        email: data.get('email'),
        password: data.get('password'),
        });
    };
    console.log(isLowercase, isUppercase)

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
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
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
                <FormControl className="password" variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                        onChange={passwordValidator}
                    />
                </FormControl>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isEnabled}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            <Grid container>
              <Typography>
                <h3>Password Must Contain</h3>
              </Typography>
              <Typography>
                { 
                    !!isLowercase ? 
                        <CheckIcon className="button-style" sx={{color: 'green'}} /> : <CloseIcon className="button-style" sx={{color: 'red'}} />
                } At least one lowercase letter</Typography>
              <Typography>{
                    !!isUppercase ? 
                        <CheckIcon className="button-style" sx={{color: 'green'}} /> : <CloseIcon className="button-style" sx={{color: 'red'}} />
                }At least one uppercase letter</Typography>
              <Typography>{
                    !!isNumber ? 
                        <CheckIcon className="button-style" sx={{color: 'green'}} /> : <CloseIcon className="button-style" sx={{color: 'red'}} />
                }At least one number letter</Typography>
              <Typography>{
                    !!isSpecialCh ? 
                        <CheckIcon className="button-style" sx={{color: 'green'}} /> : <CloseIcon className="button-style" sx={{color: 'red'}} />
                }At least one special characters</Typography>
              <Typography>
                {
                    !!isMinimumLen ? 
                        <CheckIcon className="button-style" sx={{color: 'green'}} /> : <CloseIcon className="button-style" sx={{color: 'red'}} />
                }At least Minimum 8 characters</Typography>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
