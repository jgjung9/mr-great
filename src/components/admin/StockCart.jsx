import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import useMenu from '../../hooks/useMenu';

const ICON_CLASS = 'transition-all cursor-pointer hover:scale-105 mx-1';

export default function StockCart({
  menu,
  menu: { id, image, name, category, count },
  uid,
}) {
  const { updateMenu } = useMenu();
  const handlePlus = () => {
    updateMenu.mutate({ id, category, menu: { ...menu, count: count + 1 } });
  };
  const handleMinus = () => {
    if (count < 1) return;
    updateMenu.mutate({ id, category, menu: { ...menu, count: count - 1 } });
  };

  return (
    <li className='flex justify-between my-2 items-center mx-40'>
      <img className='w-80' src={image} alt={name} />
      <div className='flex-1 justify-between ml-4'>
        <div className='basis-3/5'>
          <p className='text-lg'>{name}</p>
        </div>
      </div>
      <div className='text-2xl flex items-center'>
        <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
        <span>{count}</span>
        <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
      </div>
    </li>
  );
}
