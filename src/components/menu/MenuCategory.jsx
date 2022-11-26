import React from 'react';

export default function MenuCategory({ onClick }) {
  const category = ['stake', 'wine', 'side', 'set'];
  return (
    <div className='text-2xl border-2'>
      {category.map((c) => (
        <button
          key={category.indexOf(c)}
          className='m-4'
          onClick={(e) => onClick(e, c)}
        >
          {c === 'side' && 'Side'}
          {c === 'stake' && 'Stake'}
          {c === 'wine' && 'Wine'}
          {c === 'set' && 'Set'}
        </button>
      ))}
    </div>
  );
}
