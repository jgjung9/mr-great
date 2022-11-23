import React from 'react';
import Button from './ui/Button';

export default function FoodCard({
  food: { id, name, description, price, image },
}) {
  const handleInsertCart = () => {};

  return (
    <li className='m-10 border-b-2 my-2 p-2'>
      <img className='mx-auto w-96 h-80' src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{`₩${price}`}</p>
        <Button text='장바구니에 담기' onClick={handleInsertCart} />
      </div>
    </li>
  );
}
