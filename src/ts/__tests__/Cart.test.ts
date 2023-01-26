import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add book to cart', () => {
  const cart = new Cart();

  cart.add(new Book(
    Math.round(Math.random() * 10000),
    'Разработка на JavaScript',
    'Адам Д. Скотт',
    1000,
    320
  ));

  expect(cart.items.length).toBe(1);
});

test('add movie to cart', () => {
  const cart = new Cart();

  cart.add(new Movie(
    2012112,
    'Мстители',
    2012,
    'США',
    'Аvengers Assembly',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    137,
    'https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/972b7f43-9677-40ce-a9bc-02a88ad3919d/300x450',
    300,
  ));

  expect(cart.items.length).toBe(1);
});
