import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

const devOnJS = new Book(
  Math.round(Math.random() * 10000),
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
