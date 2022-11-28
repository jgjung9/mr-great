import React from 'react';
import useOrder from '../../hooks/useOrder';

export default function DeliveryCard({ delivery }) {
  const address = delivery.address;
  return (
    <li
      key={delivery.id}
      className='items-center mx-40  border-b-2 my-4 border-gray-200'
    >
      <p>우편번호: {address.zonecode}</p>
      <p>주소: {address.fullAddress}</p>
      <p>상세주소: {address.details}</p>
      <p>배달요청시간: {delivery.time}</p>
    </li>
  );
}
