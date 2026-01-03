"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Placeholder: integrate with authentication provider
      if (!email || !password) {
        setError('Please fill in all fields');
        return;
      }
      
      console.log('Login attempt:', { email, password });
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Login successful (demo)');
    } catch (err) {
      setError('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-900/40 to-slate-900 p-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-extrabold text-white">Welcome Back</h1>
            <p className="mt-2 text-slate-300">Sign in to access your courses and dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="rounded-lg bg-red-500/20 border border-red-500/40 p-3 text-sm text-red-200">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg bg-slate-800/40 border border-slate-700 px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-200 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-lg bg-slate-800/40 border border-slate-700 px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 font-semibold text-slate-900 hover:brightness-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-300">
            Don't have an account?{' '}
            <Link href="/signup" className="text-cyan-400 hover:text-cyan-300">
              Sign up
            </Link>
          </div>

          <div className="mt-4 text-center text-sm text-slate-400">
            <Link href="/reset-password" className="hover:text-slate-300">
              Forgot password?
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
