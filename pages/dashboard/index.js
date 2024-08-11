import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import jwt_decode from 'jwt-decode'; // Correctly import the jwt-decode library
import { Box, Typography, Card, List, ListItem, ListItemButton } from '@mui/material';

const Dashboard = () => {
  const [userRole, setUserRole] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login');
      return;
    }

    try {
      const decoded = jwt_decode(token); // Decode the token using jwt_decode
      setUserRole(decoded.role);
    } catch (error) {
      console.error('Invalid token:', error);
      localStorage.removeItem('token');
      router.push('/login');
    }
  }, [router]);

  if (!userRole) {
    return <Typography sx={{ textAlign: 'center', mt: 4 }}>Loading...</Typography>;
  }

  return (
    <Box sx={styles.container}>
      <Typography variant="h4" sx={{ mb: 4 }}>Welcome to Your Dashboard</Typography>
      {userRole === 'admin' && (
        <Card sx={styles.card}>
          <Typography variant="h5">System Admin Panel</Typography>
          <List>
            <ListItem>
              <ListItemButton component="a" href="/dashboard/manage-owners">
                Manage Book Owners
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="a" href="/dashboard/manage-books">
                Manage Books
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="a" href="/dashboard/statistics">
                View Statistics
              </ListItemButton>
            </ListItem>
          </List>
        </Card>
      )}
      {userRole === 'owner' && (
        <Card sx={styles.card}>
          <Typography variant="h5">Book Owner Panel</Typography>
          <List>
            <ListItem>
              <ListItemButton component="a" href="/dashboard/upload-book">
                Upload New Book
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="a" href="/dashboard/my-books">
                Manage My Books
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="a" href="/dashboard/revenue">
                View Revenue
              </ListItemButton>
            </ListItem>
          </List>
        </Card>
      )}
      {userRole === 'user' && (
        <Card sx={styles.card}>
          <Typography variant="h5">User Panel</Typography>
          <List>
            <ListItem>
              <ListItemButton component="a" href="/dashboard/rent-book">
                Rent a Book
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component="a" href="/dashboard/my-rentals">
                My Rentals
              </ListItemButton>
            </ListItem>
          </List>
        </Card>
      )}
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    margin: '20px 0',
    padding: '20px',
    boxShadow: 3,
    borderRadius: 2,
  },
};

export default Dashboard;
