import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import useOrder from '../../hooks/useOrder';
import OrderCard from './OrderCard';

export default function OrderList() {
  const { uid } = useAuthContext();
  const { orderQuery } = useOrder();
  const { isLoading, data: orders } = orderQuery;

  if (isLoading) return <p>Loading...</p>;

  const myOrders = Object.values(orders).filter((order) => order.uid === uid);

  return (
    <>
      <h2 className='text-2xl font-bold mt-2'>주문 목록</h2>
      <ul>
        {myOrders &&
          myOrders.map((order) => <OrderCard key={order.id} order={order} />)}
      </ul>
    </>
  );
}
