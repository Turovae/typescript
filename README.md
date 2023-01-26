# Домашнее задание к лекции «TypeScript»

### **Важные моменты** 

1. Все задачи можно выполнять в одном GitHub-репозитории.
2. Тесты должны обеспечивать 100-процентное покрытие тестируемых функций по строкам.
3. Можно использовать преднастроенный [шаблон](../ts-template/).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе добавьте ссылки на ваши GitHub-проекты.

---

## Новые типы

### Описание

Когда мы изучали интерфейсы для TypeScript, мы написали классы для книг и музыкальных альбомов. Но этого недостаточно, т. к. владельцы портала решили добавить возможность продажи фильмов.

Реализуйте класс `Movie`, который позволяет отобразить информацию, указанную на скриншоте с сайта Кинопоиск:

![](pic/avengers.png)

Удостоверьтесь, что добавление объектов вашего класса в корзину работает.

---

## Сумма покупки

### Описание

На лекции мы написали класс `Cart`, который хранит добавленные объекты и может выдавать их список.

Реализуйте в нём дополнительные функции:
1. Функцию, считающую суммарную стоимость без учёта скидки.
2. Функцию, считающую суммарную стоимость с учётом скидки. Скидка должна быть параметром, передаваемым в эту функцию.
3. Функцию, позволяющую удалять уже добавленный в корзину объект по полю `id`.

Для функций обязательно:
- указание типов параметров;
- указание типа возвращаемого значения. Если функция ничего не возвращает, то должен быть указан тип `void`.

Напишите автотесты на функции — удостоверьтесь, что покрытие по строкам для тестируемых функций равно 100 %.

---

## Список покупок * (задача со звёздочкой)

**Важно: это необязательная задача.**

### Описание

Портал решил продавать не только электронные товары (книги, музыка и фильмы), но и гаджеты — смартфоны и ноутбуки.

Тогда появилось дополнительное требование. Есть товары, которые всегда будут в единственном экземпляре независимо от их количества в корзине. Например, фильм или электронная книга. Смартфоны же можно добавить в корзину несколько раз, и общая стоимость будет указана за несколько штук.

Реализуйте в своём приложении эту функциональность. Покройте необходимые функции автотестами.

Не забудьте, что для товаров, которых может быть большое количество, есть функция уменьшения их количества в корзине — в корзине четыре айфона, и при нажатии на кнопку `-` и стало три.

---

[![Build status](https://ci.appveyor.com/api/projects/status/i363715sm2lj9u81?svg=true)](https://ci.appveyor.com/project/Turovae/typescript)