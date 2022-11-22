import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import User from '../components/User';
import { useAuthContext } from './context/AuthContext';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className='flex justify-between border-b border-gray-300 p-4'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <h1>미스터 대박</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/menu'>Menu</Link>
        <Link to='/order'>Order</Link>
        <Link to='/cart'>Cart</Link>
        {user && <User user={user}></User>}
        {user && user.isAdmin && <Link to='/admin'>Admin</Link>}
        {user && user.isRider && <Link to='/rider'>Rider</Link>}
        {!user && <button onClick={login}>Login</button>}
        {user && <button onClick={logout}>Logout</button>}
      </nav>
    </header>
  );
}
