import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import jwtDecode from 'jwt-decode';
import { Box, Typography } from '@mui/material';

export default function Dashboard() {
    const [userRole, setUserRole] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log('Retrieved Token:', token); // Debugging: Check the token value
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                console.log('Decoded Token:', decodedToken); // Debugging: Check the decoded token
                console.log('User Role:', decodedToken.role); // Debugging: Check the role field
                setUserRole("owner");
            } catch (error) {
                console.error('Invalid token:', error);
                router.push('/login');
            }
        } else {
            router.push('/login');
        }
    }, [router]);
    

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            {userRole ? (
                <Typography variant="h4">
                    Logged in as: {userRole}
                </Typography>
            ) : (
                <Typography variant="h4">
                    Loading...
                </Typography>
            )}
        </Box>
    );
}
