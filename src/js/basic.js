
export function orderByProps(obj, templateArr) {    // ФУНКЦИЯ СОРТИРОВКИ СВОЙСТВ

  const templateArrLength = templateArr.length;   // длинна массива-параметра, к-й определяет порядок сортировки

  

  let temporArr = Object.entries(obj);          // декомпозиция свойств исходного объекта obj во общий временный массив для дальнейшей обработки
  
  const temporArrLength = temporArr.length;       // длинна массива temporArr

  let orderedArr = [];                          // врЕменный массив для хранения тех свойств, которые подпадают под указанный порядок сортировки (templateArr)
  let otherArr = [];                            // врЕменный массив, для хранения свойств исходного объекта, которые не подпадают под указанный порядок сортировки (templateArr)
  
  let templateObj = {};

  for (let n = 0; n < templateArrLength; n++) { // преобразование массива в объект (каждый элемент исходного массива становится свойством нового объекта)
    templateObj[templateArr[n]] = n; // заполнение объекта
  };

  console.log('templateObj: ', templateObj);
  console.log();
    
      
    for (const prop in obj) {   //  заполнение массива orderedArr 
      if (templateObj.hasOwnProperty(prop)) {
        
          orderedArr.unshift({ [prop]: obj[prop] });
          delete obj[prop];
        }
      }
  

  for (let m = 0; m < temporArrLength; m++) {
    
    if (!(templateArr.includes(temporArr[m][0]))) otherArr.push(temporArr[m]);     //  заполнение массива otherArr
  };

  otherArr = otherArr.sort();   // сортируем не подпавшую под указанный порядок часть свойств по алфавиту

  console.log('==otherArr==')
  console.log(otherArr)   // КОНТРОЛЬНАЯ ТОЧКА
  console.log('=================================')
  console.log();
  
  let middleResult =[];
  let result =[];                                 // результирующий массив
  const otherArrLength = otherArr.length;
  
  for (let n = 0; n < otherArrLength; n++) { // преобразование массива двумерных элементов-массивов в массив объектов (каждый с одним свойством)

    let data = Object.create(null);

    data[otherArr[n][0]] = otherArr[n][1]; // трансформирование двумерного массива (являющегося элементом массива  otherArr[]) в объект
    middleResult.push(data);                          // заполнение результирующего массива объектами
  };

  console.log('== middleResult (transformed otherArr-elements to oject-elements) ==')
  console.log(middleResult) // КОНТРОЛЬНАЯ ТОЧКА
  console.log('=================================')
  console.log();

  console.log('==orderedArr==')
  console.log(orderedArr)   // КОНТРОЛЬНАЯ ТОЧКА
  console.log('=================================')
  console.log();

  result = orderedArr.concat(middleResult); // "склеивание" двух отсортированных частей массива в один результирующий (промежуточный)
  
  
  return result;
};

//-----------------------------------------------------------------------------------------------------------

function deepClone(obj) { // функция глубокага клонирования объекта
  const clObj = {};
  for(const i in obj) {
    if (obj[i] instanceof Object) {
      clObj[i] = deepClone(obj[i]);
      continue;
    }
    clObj[i] = obj[i];
  }
  return clObj;
}

export function destructFunc(oBj) { // ФУНКЦИЯ ДЕСТРУКТУРИРОВАНИЯ

  let obj = {...oBj}; // копирование объекта в новую переменную.

  let arr = [];

  if (obj.special) {
    
    let result = obj.special;       // извлечение целевого свойства из объекта
    let len = obj.special.length;   // длина массива извлечённого целевого свойства
    
    for (let i = 0; i < len; i++) {

      arr.push(deepClone(result[i]));

      if (!(result[i].hasOwnProperty('description'))) arr[i]['description'] = 'Описание недоступно';   // добавление свойства по умолчанию (если оно не определено)
    };

    
    return arr;
  };

}