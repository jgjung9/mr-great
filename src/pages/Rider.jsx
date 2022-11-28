import React from 'react';
import DeliveryList from '../components/rider/DeliveryList';

export default function Rider() {
  return (
    <section className='content-center text-center grid'>
      <h2 className='text-2xl font-bold py-2 placeholder:my-4 border-b-2 border-gray-200'>
        Rider
      </h2>
      <DeliveryList />
    </section>
  );
}
