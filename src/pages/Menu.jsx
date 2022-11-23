import React, { useState } from 'react';
import { getAllMenu } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';
import FoodCard from '../components/FoodCard';
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
        <div className='justify-center mx-auto'>
          <ul>
            {Object.values(menu.stake).map((stake) => (
              <FoodCard key={stake.id} food={stake} />
            ))}
          </ul>
        </div>
      )}
      {menu && category === 'wine' && (
        <div className='justify-center mx-auto'>
          <ul>
            {Object.values(menu.wine).map((wine) => (
              <FoodCard key={wine.id} food={wine} />
            ))}
          </ul>
        </div>
      )}
      {menu && category === 'side' && (
        <div className='justify-center mx-auto'>
          <ul>
            {Object.values(menu.side).map((side) => (
              <FoodCard key={side.id} food={side} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
