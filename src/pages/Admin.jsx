import React, { useState } from 'react';
import AdminCategory from '../components/AdminCategory';
import NewMenu from '../components/NewMenu';
import MenuManagement from '../components/MenuManagement';
import OrderStatus from '../components/OrderStatus';

export default function Admin() {
  const [category, setCategory] = useState('메뉴 등록');
  const handleCategory = (e, c) => {
    setCategory(c);
  };
  return (
    <section className='content-center text-center grid'>
      <AdminCategory onClick={handleCategory} />
      {category === '메뉴 등록' && <NewMenu />}
      {category === '재고 관리' && <MenuManagement />}
      {category === '주문 상태' && <OrderStatus />}
    </section>
  );
}
