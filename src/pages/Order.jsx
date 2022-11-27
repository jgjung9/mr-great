import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useAuthContext } from '../context/AuthContext';
import useUser from '../hooks/useUser';
import useOrder from '../hooks/useOrder';
import { useNavigate } from 'react-router-dom';

export default function Order() {
  const {
    state: { cart },
  } = useLocation();
  const { uid } = useAuthContext();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const { userQuery, addAddress, addCard } = useUser();
  const { isLoading, data: userInfo } = userQuery;
  const [card, setCard] = useState();
  const [address, setAddress] = useState();
  const { addOrder } = useOrder();

  if (isLoading) return <p>Loading...</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = { cart, address, card };
    addAddress.mutate({ uid, address });
    addCard.mutate({ uid, card });
    addOrder.mutate({ uid, order });
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  const handleLoadInfo = (e) => {
    if (userInfo?.address) {
      const addressList = Object.values(userInfo.address);
      console.log(addressList[0]);
      setAddress((address) => ({ ...addressList[0] }));
    }
    if (userInfo?.card) {
      const cardList = Object.values(userInfo.card);
      console.log(cardList[0]);
      setCard((card) => ({ ...cardList[0] }));
    }
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((address) => ({ ...address, [name]: value }));
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCard((card) => ({ ...card, [name]: value }));
  };

  return (
    <section className='flex flex-col w-auto text-center mx-40 p-10'>
      <Button text='정보 가져오기' onClick={handleLoadInfo} />
      <h2 className='text-2xl font-bold my-4'>Order</h2>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <p className='text-lg font-bold mb-2'>Address</p>
        <input
          type='text'
          name='zonecode'
          placeholder='우편번호'
          value={address && address.zonecode}
          required
          onChange={handleAddressChange}
        />
        <input
          type='text'
          name='fullAddress'
          value={address && address.fullAddress}
          placeholder='주소'
          required
          onChange={handleAddressChange}
        />
        <Button text='주소 검색' onClick={handleSubmit} />
        <input
          className='mb-4'
          type='text'
          name='details'
          value={address && address.details}
          placeholder='상세주소'
          required
          onChange={handleAddressChange}
        />
        <p className='text-lg font-bold mb-2'>Card</p>
        <input
          type='text'
          name='cardNumber'
          value={card && card.cardNumber}
          placeholder='카드 번호'
          required
          onChange={handleCardChange}
        />
        <input
          type='text'
          name='hankName'
          value={card && card.hankName}
          placeholder='은행 이름'
          required
          onChange={handleCardChange}
        />
        <input
          className='mb-4'
          type='password'
          name='password'
          value={card && card.password}
          placeholder='카드 비밀번호'
          required
          onChange={handleCardChange}
        />
        <Button text='주문하기' />
      </form>
      {success && <p>✔️주문에 성공했습니다.</p>}
    </section>
  );
}
