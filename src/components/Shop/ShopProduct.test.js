import React from 'react'
import { unmountComponentAtNode, render } from 'react-dom'
import { act } from 'react-dom/test-utils';

import ShopProduct from './ShopProduct';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // clean on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});



it('renders with data', () => {
  const fakeData = {
    id: 1,
    category: '便當',
    title: '好吃的便當',
    image: null,
    origin_price: 10,
    price: 20,
  }
  act(() => {
    render(<ShopProduct data={fakeData} />, container);
  });
  expect(container.querySelector('.product-title').textContent).toBe('便當 : 好吃的便當');
  expect(container.querySelector('.product-price').textContent).toBe('原價: 10 元 特價: 20 元 ');
  expect(container.querySelector('.product-img').getAttribute('src')).toBe(null)
});