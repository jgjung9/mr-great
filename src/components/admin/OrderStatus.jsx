import React from 'react';
import useOrder from '../../hooks/useOrder';
import OrderCard from '../mypage/OrderCard';
import useDelivery from '../../hooks/useDelivery';
import Button from '../ui/Button';

export default function OrderStatus() {
  const { orderQuery } = useOrder();
  const { isLoading, data: orders } = orderQuery;
  const { addDelivery } = useDelivery();

  if (isLoading) <p>Loading... </p>;

  const handleClick = (order) => {
    const delivery = {
      address: order.address,
      orderId: order.id,
      uid: order.uid,
    };
    addDelivery.mutate({ delivery });
  };

  return (
    <section className='w-full text-center'>
      <h2 className='text-2xl font-bold my-4'>주문 상태</h2>
      <ul>
        {orders &&
          orders.map((order) => (
            <>
              <OrderCard order={order} />
              <div className='mb-8'>
                <Button text='라이더 호출' onClick={() => handleClick(order)} />
              </div>
            </>
          ))}
      </ul>
    </section>
  );
}
