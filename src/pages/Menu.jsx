import React, { useState } from 'react';
import useMenu from '../hooks/useMenu';
import MenuCard from '../components/menu/MenuCard';
import MenuCategory from '../components/menu/MenuCategory';

export default function Menu() {
  const [category, setCategory] = useState('stake');
  const {
    menuQuery: { isLoading, error, data: menu },
  } = useMenu();

  const handleCategory = (e, c) => {
    setCategory(c);
  };

  return (
    <section className='content-center text-center grid'>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <MenuCategory key='category' onClick={handleCategory} />
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
