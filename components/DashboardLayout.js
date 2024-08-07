import { useAuth } from './AuthProvider';
import { useRouter } from 'next/router';
import Link from 'next/link';

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <div>
      <header>
        <nav>
          <Link href="/dashboard">Home</Link>
          {user.role === 'admin' && <Link href="/dashboard/owners">Owners</Link>}
          <button onClick={logout}>Logout</button>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
