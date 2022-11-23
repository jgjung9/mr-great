import React from 'react';

export default function Home() {
  return (
    <div>
      <img
        className='my-2 mx-2 opacity-100'
        src='https://firebasestorage.googleapis.com/v0/b/mr-great-9284c.appspot.com/o/image%2FHome.jpeg?alt=media&token=b41e659d-6777-444f-b4d4-bfff4d6ce368'
        alt='Home image'
      />
      <div className='absolute top-1/3 left-1/3 text-4xl font-bold text-gray-100'>
        Welcome!
      </div>
      <div className='absolute top-1/2 left-1/3 text-4xl font-bold text-gray-200'>
        Mr.Great Delivery Service
      </div>
    </div>
  );
}
