import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { addOrupdateToCart, removeFromCart } from '../../api/firebase';

const ICON_CLASS = 'transition-all cursor-pointer hover:scale-105 mx-1';

export default function CartItem({
  menu,
  menu: { id, image, name, option, count, price },
  uid,
}) {
  const handlePlus = () => {
    addOrupdateToCart(uid, { ...menu, count: count + 1 });
  };
  const handleMinus = () => {
    if (count < 2) return;
    addOrupdateToCart(uid, { ...menu, count: count - 1 });
  };
  const handleDelete = () => removeFromCart(uid, id);

  return (
    <li className='flex justify-between my-2 items-center'>
      <img src={image} alt={name} />
      <div className='flex-1 justify-between ml-4'>
        <div className='basis-3/5'>
          <p className='text-lg'>{name}</p>
          {option && <p className='text-xl font-bold'>{option}</p>}
          <p>₩{price * count}</p>
        </div>
      </div>
      <div className='text-2xl flex items-center'>
        <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
        <span>{count}</span>
        <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
        <RiDeleteBin5Fill className={ICON_CLASS} onClick={handleDelete} />
      </div>
    </li>
  );
}
