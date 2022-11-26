import React from 'react';

export default function AdminCategory({ onClick }) {
  const category = ['메뉴 등록', '재고 관리', '주문 상태'];
  return (
    <div className='text-2xl font-bold border-2'>
      {category.map((c) => (
        <button className='m-4' onClick={(e) => onClick(e, c)}>
          {c === '메뉴 등록' && '메뉴 등록'}
          {c === '재고 관리' && '재고 관리'}
          {c === '주문 상태' && '주문 상태'}
        </button>
      ))}
    </div>
  );
}
