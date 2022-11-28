import React from 'react';
import OrderList from '../components/mypage/OrderList';

export default function MyPage() {
  return (
    <section className='content-center text-center grid'>
      <h2 className='text-2xl font-bold py-2 placeholder:my-4 border-b-2 border-gray-200'>
        My Page
      </h2>
      <OrderList />
    </section>
  );
}
