import React from 'react';

export default function Banner() {
  return (
    <section className='h-80 relative'>
      <img src='../../public/imgs/banner.jpg' alt='' />
      <div className='w-full h-full bg-cover bg-banner'></div>
      <div className='absolute w-full top-32 text-center text-gray-200 drop-shadow-2xl'>
        <h2 className='text-6xl'>Special Dinner</h2>
        <p className='text-2xl'>High Quality Delivery Service</p>
      </div>
    </section>
  );
}
