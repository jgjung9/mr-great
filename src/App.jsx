import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

const queryClient = new QueryClient();

export default function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Navbar />
          <Banner />
          <Outlet />
        </AuthContextProvider>
      </QueryClientProvider>
    </div>
  );
}
