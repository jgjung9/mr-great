import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './components/context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';

const queryClient = new QueryClient();

export default function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Navbar />
          <Outlet />
        </AuthContextProvider>
      </QueryClientProvider>
    </div>
  );
}
