

import React from 'react'
import { FaTrash } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';

export const Itemstable = ({ items, removeItem, increaCount, decreaCount }) => (
  <div className='PriceTable__conteiner'>

    {items.map(item => (
      <div className='PriceTable' key={item.id}>
        <div className='PriceTable__images'>
          <Image src={'./images/' + item.img}
           style={{width: '80px', height: '120px'}} alt='react logo' />

        </div>
        <div className='PriceTable__title'><h4>{item.title}</h4></div>

        <div className='PriceTable__pricevan'><b>{item.price}.грн</b></div>
        <div className='shopCounter'>
          <button onClick={() => decreaCount(item.id, item.amount)} className='minus'>-</button>
          <span className='count'>{item.amount}</span>
          <button onClick={() => increaCount(item.id)} className='plus'>+</button>
          <div className='TotalPrice'>{new Intl.NumberFormat().format(item.price * item.amount)}.грн</div>
          <FaTrash onClick={() => removeItem(item.id)} className='Dellete' />
        </div>
      </div>
    ))}
  </div>
);

