import React from 'react';
import Button from '../components/ui/Button';

export default function MenuCategory({ onClick }) {
  const category = ['stake', 'wine', 'side'];
  return (
    <div className='text-2xl border-2'>
      {category.map((c) => (
        <button className='m-4' onClick={(e) => onClick(e, c)}>
          {c === 'side' && 'Side'}
          {c === 'stake' && 'Stake'}
          {c === 'wine' && 'Wine'}
        </button>
      ))}
    </div>
  );
}
