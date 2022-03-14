import {orderByProps,destructFunc} from '../basic';

// проверка работы ФУНКЦИИ СОРТИРОВКИ СВОЙСТВ
test('shoud check sort of object', () => {
  
  const result = orderByProps(
      {name: "мечник", health: 10, level: 2, attack: 80, defence: 40},
      [ "level","name"]
    );
  expect(result).toEqual(
    [
      {"level": 2},
      {"name": "мечник"},
      {"attack": 80},
      {"defence": 40},
      {"health": 10}
    ]
  )
});

// проверка работы ФУНКЦИИ ДЕСТРУКТУРИРОВАНИЯ
test('shoud check destructuring object', () => {
  const result = destructFunc(
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон'
        }, 
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...'
          
        }
      ]	
  });
  expect(result).toEqual(
    [
      {
        "id": 8,
        "name": "Двойной выстрел",
        "icon": "http://...",
        "description": "Двойной выстрел наносит двойной урон"
      },
      {
        "id": 9,
        "name": "Нокаутирующий удар",
        "icon": "http://...",
        "description": "Описание недоступно"
      }
    ]);
});



