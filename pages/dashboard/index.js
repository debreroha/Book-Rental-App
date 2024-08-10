import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      axios.get('/api/auth/me', { headers: { Authorization: `Bearer ${token}` } })
        .then(response => setUser(response.data))
        .catch(() => router.push('/login'));
    }
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.role === 'admin' ? 'Admin' : 'Owner'} Dashboard</h1>
      {/* Render dashboard components based on user role */}
    </div>
  );
}
