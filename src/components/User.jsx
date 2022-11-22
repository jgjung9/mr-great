import React from 'react';
import { Link } from 'react-router-dom';

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className='flex items-center'>
      <Link to='/mypage' className='mr-4'>
        My Page
      </Link>
      <img
        src={photoURL}
        alt={displayName}
        className='w-8 h-8 rounded-full mr-2'
      />
      <span className='hidden md:block'>{displayName}</span>
    </div>
  );
}
