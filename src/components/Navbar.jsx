import React from 'react';
import { Link } from 'react-router-dom';
import User from '../components/User';
import { useAuthContext } from '../context/AuthContext';
import Button from './ui/Button';
import CartStatus from './CartStatus';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className='flex justify-between border-b border-gray-300 p-4'>
      <Link to='/' className='flex items-center text-4xl'>
        <h1>미스터 대박</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/menu'>Menu</Link>
        <Link to='/order'>Order</Link>
        {user && (
          <Link to='/cart'>
            <CartStatus />
          </Link>
        )}
        {user && <User user={user}></User>}
        {user && user.isAdmin && <Link to='/admin'>Admin</Link>}
        {user && user.isRider && <Link to='/rider'>Rider</Link>}
        {!user && <Button text='Login' onClick={login} />}
        {user && <Button text='Logout' onClick={logout} />}
      </nav>
    </header>
  );
}
