import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import CartItem from '../components/cart/CartItem';
import PriceCard from '../components/cart/PriceCard';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';

const styles = ['simple', 'grand', 'deluxe'];
const stylePrice = [0, 5000, 10000];

export default function MyCart() {
  const { uid } = useAuthContext();
  const { cartQuery } = useCart();
  const { isLoading, data: menus } = cartQuery;
  const [style, setStyle] = useState({
    selected: styles[0],
    price: stylePrice[0],
  });
  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  const hasMenus = menus && menus.length > 0;
  const totalPrice =
    menus &&
    menus.reduce((prev, cur) => prev + parseInt(cur.price) * cur.count, 0);

  const handleStyle = (e) => {
    const index = styles.indexOf(e.target.value);
    setStyle({ selected: styles[index], price: stylePrice[index] });
  };

  const handleOrder = (e) => {
    const cart = {
      ...menus,
      style: style.selected,
      price: totalPrice + style.price,
    };

    navigate(`../order`, { state: { cart } });
  };

  return (
    <section className='p-8 flex flex-col mx-12'>
      <p className='text-2xl text-center font-bold pb-4 border-b border-gray-300'>
        My Cart
      </p>
      {!hasMenus && <p>장바구니에 메뉴가 없습니다.</p>}
      {hasMenus && (
        <>
          <ul className='border-b border-gray-300 p-4 px-8'>
            {menus &&
              menus.map((menu) => (
                <CartItem key={menu.id} menu={menu} uid={uid}></CartItem>
              ))}
            <div className='font-bold text-2xl'>
              <label htmlFor='select'></label>
              <select id='select' onChange={handleStyle}>
                {styles.map((style, idx) => (
                  <option key={idx}>{style}</option>
                ))}
              </select>
            </div>
          </ul>
          <div className='flex justify-between items-center mb-6'>
            <PriceCard text='총 금액' price={totalPrice} />
            <BsFillPlusCircleFill />
            <PriceCard text={`style: ${style.selected}`} price={style.price} />
            <FaEquals />
            <PriceCard text='총가격' price={totalPrice + style.price} />
          </div>
          <Button text='주문하기' onClick={handleOrder} />
        </>
      )}
    </section>
  );
}
