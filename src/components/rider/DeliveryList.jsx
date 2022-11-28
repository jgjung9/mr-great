import React from 'react';
import useDelivery from '../../hooks/useDelivery';
import DeliveryCard from './DeliveryCard';

export default function DeliveryList() {
  const { deliveryQuery } = useDelivery();
  const { isLoading, data: deliveries } = deliveryQuery;

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h2 className='text-2xl font-bold mt-2'>배달 목록</h2>
      <ul>
        {deliveries.map((delivery) => (
          <DeliveryCard delivery={delivery} />
        ))}
      </ul>
    </>
  );
}
