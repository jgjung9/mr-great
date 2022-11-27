import React from 'react';
import userMenu from '../../hooks/useMenu';
import StockCard from './StockCard';

const UL_CLASS = 'border-b border-gray-300 p-4 px-8 mb-4';

export default function MenuManagement() {
  const { menuQuery } = userMenu();
  const { isLoading, data: menus } = menuQuery;
  if (isLoading) return <>Loding...</>;

  const { stake, wine, side } = menus;

  return (
    <section className='w-full text-center'>
      <h2 className='text-2xl font-bold my-4'>재고 관리</h2>
      <div>
        <p className='text-2xl font-bold my-4'>Stake</p>
        <ul className={UL_CLASS}>
          {Object.values(stake).map((menu) => (
            <StockCard menu={menu} />
          ))}
        </ul>
      </div>
      <div>
        <p className='text-2xl font-bold my-4'>Wine</p>
        <ul className={UL_CLASS}>
          {Object.values(wine).map((menu) => (
            <StockCard menu={menu} />
          ))}
        </ul>
      </div>
      <div>
        <p className='text-2xl font-bold my-4'>Side</p>
        <ul className={UL_CLASS}>
          {Object.values(side).map((menu) => (
            <StockCard menu={menu} />
          ))}
        </ul>
      </div>
    </section>
  );
}
