import React from 'react';
import { MenuItem } from '../components/MenuItem'; // Assuming you have a separate component for each menu item
import pizza1 from '../assets/PizzaImagen1.jpg';
import pizza2 from '../assets/PizzaImagen2.jpg';
import pizza3 from '../assets/PizzaImagen3.jpg';

const Menu = () => {
  const arrayMenu = [
    {
      title: 'Pizza',
      img: pizza1,
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Perros',
      img: pizza2,
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Burger',
      img: pizza3,
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  return (
    <div className='menu-container'>
      {arrayMenu.map((item, index) => (
        <MenuItem
          key={index}
          title={item.title}
          img={item.img}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export {Menu};