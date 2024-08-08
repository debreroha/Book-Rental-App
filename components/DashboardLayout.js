"use client"
import { useAuth } from './AuthProvider';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect } from 'react';

export const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) return null; // Prevents rendering if the user is not authenticated

  return (
    <div>
      <header>
        <nav>
          <Link href="/dashboard">Home</Link>
          {user && user.role === 'admin' && (
            <Link href="/dashboard/owners">Owners</Link>
          )}
          <button onClick={logout}>Logout</button>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};
