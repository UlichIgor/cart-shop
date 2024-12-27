import React, { useState } from 'react';
import { defaultItems } from '../Data';
import { Itemstable } from './itemstable';

export const ShopingCart = () => {
  const [items, setItems] = useState(defaultItems);
  const result = items.reduce(

    (previousValue, currentItem) =>
      previousValue + currentItem.amount * currentItem.price,
    0
  );
  const Footer = (
    <div className='ResultPanel'>
      <span>
        Ітого:<span className='value'>{new Intl.NumberFormat().format(result)}.грн</span>
      </span>
      <button className='Shoping'>Купити</button>
    </div>
  );

  const EmptyTemplate = (
    <div className='Empty'>
      <h6>Кошик порожній</h6>
      <p>Але це ніколи не пізно виправити :)</p>
    </div>
  );

  const hadleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const hedleIncreaCount = (id) => {
    setItems(items.map(item => {
      if (item.id === id) {
        item.amount++;
      }
      return item;
    }));
  }
  const hedleDecreaCount=(id, amount) => {
    if (amount < 2) {
      hadleRemoveItem(id);
    }else{
    setItems(items.map(item => {
      if (item.id === id) {
        item.amount--;
      }
      return item;
    }));
  }
}
  return (
    <div className='cart__content'>
      <h1>Кошик</h1>
      {
        !!items.length ?
          <Itemstable items={items}
            removeItem={hadleRemoveItem}
            increaCount={hedleIncreaCount}
            decreaCount={hedleDecreaCount}
          />
          : EmptyTemplate
      }
      {!!items.length && Footer}
    </div>
  );
}
