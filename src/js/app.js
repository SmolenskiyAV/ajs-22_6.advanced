// TODO: write your code here
import {orderByProps, destructFunc} from './basic';


let obj = {name: "мечник", health: 10, level: 2, attack: 80, defence: 40};
const templateArr = ["health", "defence"];

console.log('==ИСХОДНЫЙ ОБЪЕКТ СОРТИРОВКИ==');
console.log(obj);
console.log('*********************************');

console.log(orderByProps(obj, templateArr));
console.log();

//=================================================================

const character = {
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
};

const character2 = {
    name: 'Вася',
    type: 'Zombie',
    health: 80,
    level: 9,
    attack: 20,
    defence: 60,
    special: [
      {
        id: 7,
        name: 'Удар ногой',
        icon: 'http://...',
        description: 'Двойной удар наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Удар рукой',
        icon: 'http://...'
        
      },
      {
        id: 6,
        name: 'Удар головой',
        icon: 'http://...'
        
      }

    ]	
};

console.log('==ИСХОДНЫЙ ОБЪЕКТ ДЕСТРУКТУРИРОВАНИЯ==');
console.log(character2);
console.log('*********************************');

console.log('==РЕЗУЛЬТАТ ДЕСТРУКТУРИРОВАНИЯ==');
console.log(destructFunc(character2));
//=================================================================


console.log();
console.log('end of execution!');