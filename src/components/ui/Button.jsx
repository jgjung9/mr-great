import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      className='bg-blue-400 text-white py-2 px-4 rounded-md'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
