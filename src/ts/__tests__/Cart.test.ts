import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import Gadget from '../domain/Gadget';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

const devOnJS = new Book(
  23,
  'Разработка на JavaScript',
  'Адам Д. Скотт',
  1000,
  320
);

test('add book to cart', () => {
  const cart = new Cart();

  cart.add(devOnJS);

  expect(cart.items.length).toBe(1);
});

const movieAvengers = new Movie(
  2012112,
  'Мстители',
  2012,
  'США',
  'Аvengers Assembly',
  ['фантастика', 'боевик', 'фэнтези', 'приключения'],
  137,
  'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/972b7f43-9677-40ce-a9bc-02a88ad3919d/300x450',
  300,
);

test('add movie to cart', () => {
  const cart = new Cart();

  cart.add(movieAvengers);

  expect(cart.items.length).toBe(1);
});

test('get total cost', () => {
  const cart = new Cart();
  cart.add(devOnJS);
  cart.add(movieAvengers);

  expect(cart.items.length).toBe(2);
  expect(cart.totalCost()).toBe(1300);
  expect(cart.totalCost(10)).toBe(1170);
});

test('delete items from Cart', () => {
  const cart = new Cart();
  cart.add(devOnJS);
  expect(cart.items.length).toBe(1);
  cart.add(movieAvengers);
  expect(cart.items.length).toBe(2);
  cart.delete(23);
  expect(cart.items.length).toBe(1);
  cart.delete(23);
  expect(cart.items.length).toBe(1);
  cart.delete(2012112);
  expect(cart.items.length).toBe(0);
});

const iphone = new Gadget(
  55,
  'iPhone 13',
  'iPhone 13',
  80000,
);

test('add gadgets and digital to cart and delete them', () => {
  const cart = new Cart();
  cart.add(devOnJS);
  expect(cart.items.length).toBe(1);
  cart.add(devOnJS);
  expect(cart.items.length).toBe(1);
  cart.add(movieAvengers);
  expect(cart.items.length).toBe(2);
  cart.add(iphone);
  expect(cart.items.length).toBe(3);
  expect(cart.totalCost()).toBe(81300);
  cart.add(iphone);
  expect(cart.items.length).toBe(4);
  expect(cart.totalCost()).toBe(161300);

  cart.delete(23);
  expect(cart.items.length).toBe(3);
  expect(cart.totalCost()).toBe(160300);

  cart.delete(23);
  expect(cart.items.length).toBe(3);
  expect(cart.totalCost()).toBe(160300);

  cart.delete(2012112);
  expect(cart.items.length).toBe(2);
  expect(cart.totalCost()).toBe(160000);

  cart.delete(55);
  expect(cart.items.length).toBe(1);
  expect(cart.totalCost()).toBe(80000);

  cart.delete(55);
  expect(cart.items.length).toBe(0);
  expect(cart.totalCost()).toBe(0);
});