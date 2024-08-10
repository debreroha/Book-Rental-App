// src/pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import AuthForm from '@/components/AuthForm';
import { signToken } from '@/utils/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
      // Assume we have a signToken function to generate JWT
      const token = signToken({ email: data.user.email, role: data.user.role, id: data.user.id });
      localStorage.setItem('token', token);
      router.push('/dashboard');
    } else {
      alert(data.message);
    }
  };

  return (
    <AuthForm
      formType="login"
      onSubmit={handleLogin}
      setEmail={setEmail}
      setPassword={setPassword}
      footerText="Don't have an account? "
      footerLink="/signup"
      footerLinkText="Sign Up"
    />
  );
}
