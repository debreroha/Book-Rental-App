import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signToken } from '../utils/auth';



const defaultTheme = createTheme();

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Implement your login logic here
    const token = signToken({ email, role: 'owner', id: 1 });
    localStorage.setItem('token', token);
    router.push('/dashboard');
  }


  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" >
        <CssBaseline />
        <Grid
          item
          sx={{
            width:720,
            height:"100vh",
            background: '#171B36',
            backgroundSize: 'cover',
            backgroundPosition: 'left',
          }}
        />
        <Grid item xs={12} sm={8} md={5}  elevation={6} square
            sx={{
                width:720,
                height:"100vh",
                left:720,
            }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value= {password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, background: "#00ABFF",}}

              >
                LOGIN
              </Button>
              <div>
              <Typography component="h1" variant="body1" 
                sx={{
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '0.15000000596046448px',
                    textAlign: 'center',
                    // width: '224px',
                    // height: '24px',
                    }}>
                   
                    Have not an account? <Link sx={{ color:'#00ABFF'}} href="#" >
                        Sign Up
                    </Link>
              </Typography>
              </div>
            
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );    
}

