import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../api/firebase';
export default function Navbar() {
  return (
    <header className='flex justify-between border-b border-gray-300 p-4'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <h1>미스터 대박</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/menu'>Menu</Link>
        <Link to='/order'>Order</Link>
        <Link to='/voiceorder'>Voice Order</Link>
        <Link to='/cart'>Cart</Link>
        <button onClick={login}>Login</button>
      </nav>
    </header>
  );
}
