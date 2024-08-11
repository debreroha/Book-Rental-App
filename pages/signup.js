import { useState } from 'react';
import { useRouter } from 'next/router';
import AuthForm from '@/components/AuthForm';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('owner'); // Default role as 'owner'
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await response.json();

      if (data.success) {
        // Redirect to login page after successful sign-up
        router.push('/login');
      } else {
        alert('Sign up failed: ' + data.message);
      }
    } catch (error) {
      console.error('An error occurred during sign-up:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <AuthForm
      formType="signup"
      onSubmit={handleSignup}
      setEmail={setEmail}
      setPassword={setPassword}
      setConfirmPassword={setConfirmPassword}
      setRole={setRole}
      footerText="Already have an account? "
      footerLink="/login"
      footerLinkText="Log in"
    />
  );
}
