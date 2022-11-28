import React from 'react';

export default function OrderCard({ order }) {
  const menus = Object.values(order.cart).filter(
    (val) => typeof val === typeof {}
  );
  return (
    <li
      key={order.id}
      className='items-center mx-40 border-b-2 border-gray-200'
    >
      {menus.map((menu) => (
        <div className='flex flex-col justify-between m-2'>
          <p>{menu.name}</p>
          <p>수량: {menu.count}</p>
          {menu.option && <p>{menu.option}</p>}
          <p>₩{menu.count * menu.price}</p>
        </div>
      ))}
      <p>{order.cart.style} </p>
      <div className='flex flex-row justify-center m-2'>
        <p>총액: ₩{order.cart.price}</p>
      </div>
      <div>주문시간: {order.time}</div>
    </li>
  );
}
