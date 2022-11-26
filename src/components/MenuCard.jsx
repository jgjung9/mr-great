import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MenuCard({
  menu,
  menu: { id, name, description, price, image, options },
}) {
  const navigate = useNavigate();
  return (
    <li
      onClick={() => {
        navigate(`./${id}`, { state: { menu } });
      }}
      className='rounded-lg shadow-md overflow-hidden p-4 mx-auto w-2/4 cursor-pointer'
    >
      <img className='mx-auto w-96 h-80' src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>₩{price}</p>
    </li>
  );
}
