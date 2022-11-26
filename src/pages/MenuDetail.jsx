import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

export default function MenuDetail() {
  const { uid } = useAuthContext();
  const {
    state: {
      menu: { id, image, name, description, price, options },
    },
  } = useLocation();

  const [success, setSuccess] = useState(false);
  const { addCart } = useCart();
  const [selected, setSelected] = useState(options && options[0]);

  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    const menu = { id, image, name, price, option: selected, count: 1 };
    addCart.mutate({ uid, menu });
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  return (
    <section className='flex flex-col p-4 md:flex-row m-12'>
      <img className='px-4 basis-7/12 w-2/3 pr-10' src={image} alt={name} />
      <div className='w-full basis-5/12 flex flex-col p-4'>
        <h2 className='text-3xl font-bold py-2 border-b border-gray-400'>
          {name}
        </h2>
        <p className='text-lg py-4'>{description}</p>
        <p className='text-2xl font-bold py-2'>₩{price}</p>
        <div className='flex items-center'>
          {options && <label htmlFor='select'>옵션 : </label>}
          {options && (
            <select id='select' onChange={handleSelect} value={selected}>
              {options.map((option, idx) => (
                <option key={idx}>{option}</option>
              ))}
            </select>
          )}
        </div>
        <Button text='장바구니에 담기' onClick={handleClick} />
        {success && <p>✔️ 장바구기에 추가되었습니다.</p>}
      </div>
    </section>
  );
}
