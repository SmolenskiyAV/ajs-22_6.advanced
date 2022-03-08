export default function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}

//export let errMessage1 = ''; // экспорт значения ошибки (проверка длины имени и типа персонажа), для тестировки в jest
//export let errMessage2 = '';  // экспорт значения ошибки (проверка LevelUp персонажа), для тестировки в jest

// ---------------------------------------------------------------------------------------------------------------------

export function orderByProps(obj, templateArr) {    // ФУНКЦИЯ СОРТИРОВКИ СВОЙСТВ

  const templateArrLength = templateArr.length;   // длинна массива-параметра, к-й определяет порядок сортировки

  let temporArr = Object.entries(obj);          // декомпозиция свойств исходного объекта obj во общий временный массив для дальнейшей обработки
  
  const temporArrLength = temporArr.length;       // длинна массива temporArr

  let orderedArr = [];                          // врЕменный массив для хранения тех свойств, которые подпадают под указанный порядок сортировки (templateArr)
  let otherArr = [];                            // врЕменный массив, для хранения свойств исходного объекта, которые не подпадают под указанный порядок сортировки (templateArr)
  

  for (let i = 0; i < templateArrLength; i++) {
    
    for (let m = 0; m < temporArrLength; m++) {
      
      if (temporArr[m][0] === templateArr[i]) {   // если имя свойства исходного массива совпадает со значением массива templateArr

        orderedArr.push(temporArr[m]);            //  заполнение массива orderedArr 
      }
    };
  };

  for (let m = 0; m < temporArrLength; m++) {
    
    if (!(templateArr.includes(temporArr[m][0]))) otherArr.push(temporArr[m]);     //  заполнение массива otherArr
  };

  otherArr = otherArr.sort();   // сортируем не подпавшу под указанный порядок часть свойств по алфавиту
  
  let middleResult = orderedArr.concat(otherArr); // "склеивание" двух отсортированных частей массива в один результирующий (промежуточный)
  let result =[];                                 // результирующий массив


  for (let n = 0; n < temporArrLength; n++) { // преобразование массива двумерных элементов-массивов в массив объектов (каждый с одним свойством)

    let data = Object.create(null);

    data[middleResult[n][0]] = middleResult[n][1]; // трансформирование двумерного массива (являющегося элементом массива middleResult[]) в объект
    result.push(data);                          // заполнение результирующего массива объектами
  };

  console.log('==orderedArr==')
  console.log(orderedArr)   // КОНТРОЛЬНАЯ ТОЧКА
  console.log('=================================')
  console.log();

  console.log('==otherArr==')
  console.log(otherArr)   // КОНТРОЛЬНАЯ ТОЧКА
  console.log('=================================')
  console.log();

  console.log('== middleResult (orderedArr + otherArr) ==')
  console.log(middleResult) // КОНТРОЛЬНАЯ ТОЧКА
  console.log('=================================')
  console.log();
  
  
  return result;
};

//-----------------------------------------------------------------------------------------------------------

export function destructFunc(obj) { // ФУНКЦИЯ ДЕСТРУКТУРИРОВАНИЯ

  if (obj.special) {
    
    let result = obj.special;       // извлечение целевого свойства из объекта
    let len = obj.special.length;   // длина массива извлечённого целевого свойства

    for (let i = 0; i < len; i++) {

      if (!(result[i].hasOwnProperty('description'))) result[i]['description'] = 'Описание недоступно';   // добавление свойства по умолчанию (если оно не определено)
    };

    return result;
  };

}