import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../../api/firebase';
import { useAuthContext } from '../../context/AuthContext';

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: menu } = useQuery(['carts'], () => getCart(uid));
  return (
    <div className='relative'>
      <span>Cart</span>
      {menu.length > 0 && (
        <p className='w-6 h-6 text-center bg-blue-400 text-white font-bold rounded-full absolute -top-3 left-5'>
          +{menu.length}
        </p>
      )}
    </div>
  );
}
