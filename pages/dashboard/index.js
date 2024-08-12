import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {jwtDecode} from 'jwt-decode';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Divider, ListItemButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import UploadIcon from '@mui/icons-material/Upload';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Dashboard() {
    const [userRole, setUserRole] = useState(null);
    const [activePage, setActivePage] = useState('dashboard');
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setUserRole(decodedToken.role);
            } catch (error) {
                console.error('Invalid token:', error);
                router.push('/login');
            }
        } else {
            router.push('/login');
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/login');
    };

    const renderContent = () => {
        switch (activePage) {
            case 'dashboard':
                return (
                    <Box sx={{ padding: 2 }}>
                        <Typography variant="h5" sx={{ marginBottom: 2 }}>This Month&apos;s Statistics</Typography>
                        <Typography>Statistics and Live Book Status Table</Typography>
                    </Box>
                );
            case 'upload':
                return (
                    <Box sx={{ padding: 2 }}>
                        <Typography variant="h5" sx={{ marginBottom: 2 }}>Book Upload</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <input type="text" placeholder="Book Title" />
                            <input type="number" placeholder="Quantity" />
                            <input type="number" placeholder="Rental Duration (days)" />
                            <input type="file" placeholder="Upload Book Cover" />
                            <button>Submit</button>
                        </Box>
                    </Box>
                );
            case 'notifications':
                return (
                    <Box sx={{ padding: 2 }}>
                        <Typography variant="h5">Notifications</Typography>
                    </Box>
                );
            case 'settings':
                return (
                    <Box sx={{ padding: 2 }}>
                        <Typography variant="h5">Settings</Typography>
                    </Box>
                );
            case 'admin':
                return (
                    <Box sx={{ padding: 2 }}>
                        <Typography variant="h5">Admin Login</Typography>
                    </Box>
                );
            default:
                return null;
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
                }}
            >
                <List>
                    <ListItemButton onClick={() => setActivePage('dashboard')}>
                        <ListItemIcon><DashboardIcon /></ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                    {userRole === 'owner' && (
                        <ListItemButton onClick={() => setActivePage('upload')}>
                            <ListItemIcon><UploadIcon /></ListItemIcon>
                            <ListItemText primary="Book Upload" />
                        </ListItemButton>
                    )}
                    <ListItemButton onClick={() => setActivePage('notifications')}>
                        <ListItemIcon><NotificationsIcon /></ListItemIcon>
                        <ListItemText primary="Notifications" />
                    </ListItemButton>
                    <ListItemButton onClick={() => setActivePage('settings')}>
                        <ListItemIcon><SettingsIcon /></ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                    <ListItemButton onClick={() => setActivePage('admin')}>
                        <ListItemIcon><AdminPanelSettingsIcon /></ListItemIcon>
                        <ListItemText primary="Login as Admin" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton onClick={handleLogout}>
                        <ListItemIcon><LogoutIcon /></ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </List>
            </Drawer>
            <Box sx={{ flexGrow: 1, padding: 3 }}>
                {renderContent()}
            </Box>
        </Box>
    );
}
