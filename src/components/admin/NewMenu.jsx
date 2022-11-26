import React, { useState } from 'react';
import { addNewMenu, uploadImage } from '../../api/firebase';
import Button from '../ui/Button';

export default function NewMenu() {
  const [menu, setMenu] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setMenu((menu) => ({ ...menu, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);

    uploadImage(menu.name, file)
      .then((imgURL) => {
        addNewMenu(menu, imgURL).then(() => {
          setSuccess(`메뉴가 추가되었습니다.`);
          setTimeout(() => {
            setSuccess(null);
          }, 4000);
        });
      })
      .catch(console.error)
      .finally(() => setIsUploading(false));
  };

  return (
    <section className='w-full text-center'>
      <h2 className='text-2xl font-bold my-4'>메뉴 등록</h2>
      {success && <p>✔ {success}</p>}
      {file && (
        <img
          className='w-96 mx-auto mb-2'
          src={URL.createObjectURL(file)}
          alt='local file'
        />
      )}
      <form className='flex flex-col px-40 mx-40' onSubmit={handleSubmit}>
        <input
          type='file'
          accept='image/*'
          name='file'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='category'
          value={menu.category ?? ''}
          placeholder='카테고리'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='name'
          value={menu.name ?? ''}
          placeholder='음식명'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='description'
          value={menu.description ?? ''}
          placeholder='설명'
          onChange={handleChange}
        />
        <input
          type='number'
          name='price'
          value={menu.price ?? ''}
          placeholder='가격'
          required
          onChange={handleChange}
        />
        <Button
          text={isUploading ? 'Uploading..' : '메뉴 추가하기'}
          disalbed={isUploading}
        />
      </form>
    </section>
  );
}
