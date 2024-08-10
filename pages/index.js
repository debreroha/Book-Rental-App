// src/pages/index.js
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <Typography variant="h3" sx={{ mb: 4 }}>
        Welcome to Book Rental
      </Typography>
      <Link href="/login" passHref>
        <Button variant="contained" color="primary" sx={{ mb: 2 }}>
          Login
        </Button>
      </Link>
      <Link href="/signup" passHref>
        <Button variant="outlined" color="primary">
          Sign Up
        </Button>
      </Link>
    </Box>
  );
}
