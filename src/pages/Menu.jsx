import React, { useState } from 'react';
import { getAllMenu } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';
import MenuCard from '../components/MenuCard';
import MenuCategory from '../components/MenuCategory';

export default function Menu() {
  const { isLoading, error, data: menu } = useQuery(['menu'], getAllMenu);
  const [category, setCategory] = useState('stake');

  const handleCategory = (e, c) => {
    setCategory(c);
  };

  return (
    <section className='content-center text-center grid'>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <MenuCategory onClick={handleCategory} />
      {category && <h2 className='text-3xl mt-2'>{category}</h2>}
      {menu && category === 'stake' && (
        <ul className='grid grid-cols-1 p-10'>
          {Object.values(menu.stake).map((stake) => (
            <MenuCard key={stake.id} menu={stake} />
          ))}
        </ul>
      )}
      {menu && category === 'wine' && (
        <ul className='grid grid-cols-1 p-10'>
          {Object.values(menu.wine).map((wine) => (
            <MenuCard key={wine.id} menu={wine} />
          ))}
        </ul>
      )}
      {menu && category === 'side' && (
        <ul className='grid grid-cols-1 p-10'>
          {Object.values(menu.side).map((side) => (
            <MenuCard key={side.id} menu={side} />
          ))}
        </ul>
      )}
      {menu && category === 'set' && (
        <ul className='grid grid-cols-1 p-10'>
          {Object.values(menu.set).map((set) => (
            <MenuCard key={set.id} menu={set} />
          ))}
        </ul>
      )}
    </section>
  );
}
