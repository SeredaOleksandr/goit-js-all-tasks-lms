// !!!Масиви
// Масив — це впорядкована структура даних, яка використовується
// для зберігання колекції елементів.
// const planets = ['Earth', 'Mars', 'Venus']; // масив рядків
// const numbers = [1, 2, 3, 4, 5]; // масив чисел
// const mixed = ['apple', 10, true]; // масив з елементами різних типів


// !Доступ до елементів
// arrayName[index]
// const planets = ['Earth', 'Mars', 'Venus'];
// console.log(planets[0]); // 'Earth'
// console.log(planets[1]); // 'Mars'
// console.log(planets[2]); // 'Venus'

// !Перевизначення значення елемента
// const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
// planets[0] = 'Jupiter';
// planets[2] = 'Neptune';
// console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']

// !Довжина масиву
// const planets = ['Earth', 'Mars', 'Venus'];
// console.log(planets.length); // 3

// const planets = ['Earth', 'Mars', 'Venus'];

// if(planets.length >= 3) {
// 	console.log("3 or more elements");
// } else {
// 	console.log("3 or less elements");
// }


// Функція getOrderQuantity(order) приймає один параметр order -
// масив рядків, які описують продукти в замовленні клієнта.
// Доповни код функції таким чином, щоб вона повертала число,
// що дорівнює кількості елементів масиву.

// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]))
// console.log(getOrderQuantity(["apple", "banana", "pear"]))
// console.log(getOrderQuantity([]))


// !Індекс останнього елемента
// Щоб знайти значення останнього елемента масиву, нам потрібно
// знати його індекс. Індекс останнього елемента можна визначити
// за допомогою формули довжина_масиву - 1.

// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// console.log(planets[lastElementIndex]); // "Venus"


// Функція getLastElementMeta(array) приймає один параметр array - масив
// довільних значень. Доповни код функції таким чином, щоб вона повертала
// новий масив з двох елементів:
// перший елемент - це індекс останнього елементу у масиві array
// другий елемент - це значення останнього елементу у масиві array

// function getLastElementMeta(array) {
//   const lastIndex = array.length - 1;
//   const lastElement = array[lastIndex];
//   return [lastIndex, lastElement];
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"])); // [3, "banana"]
// console.log(getLastElementMeta(["apple", "peach", "pear"])); // [2, "pear"]


// Функція getExtremeElements(array) приймає один параметр array - масив елементів
// довільної довжини. Доповни код функції таким чином, щоб вона повертала масив
// з двох елементів - першого і останнього елементів параметра array.

// function getExtremeElements(array) {
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
//   return [firstElement, lastElement];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));


// !Присвоєння за посиланням і за значенням

// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]

// a[1] = "Jacob";
// console.log(a); // ["Mango", "Jacob"]
// console.log(b); // ["Mango", "Jacob"]

// b[0] = "Ajax";
// console.log(a); // ["Ajax", "Jacob"]
// console.log(b); // ["Ajax", "Jacob"]

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];

// console.log(arr1 === arr2); // false
// console.log([] === []); // fals


// !Приведення типів: масиви
// ?Масив → Рядок
// const array = [1, true, "Poly"];
// console.log(String(array));// "1,true,Poly"
// console.log(array + "5"); // "1,true,Poly5"

// ?Масив → Число
// console.log(Number([])); // 0
// console.log(Number([1])); // 1
// console.log(Number([1, 2, 3])); // NaN

// ?Масив → Логічне значення(буль)
// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];
// console.log(Boolean(emptyArray)); // true
// console.log(Boolean(nonEmptyArray)); // true


// !!!Методи масиву
// !Метод join()
// Метод масиву join(delimiter) дозволяє об'єднати елементи масиву в рядок.

// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("-")); // 'JavaScript-is-amazing'

// function transformString(string) {
// 	const words = string.split("_");
// 	return words.join("-");
// }

// transformString("user_age"); // "user-age"
// transformString("price_per_droid"); // "price-per-droid"


// !====Задача====!
// Функція getLength(array) очікує один параметр array - масив довільних
// значень. Доповни код функції так, щоб вона перетворювала масив у рядок,
// без роздільників, і повертала кількість символів в отриманому рядку.

// const array = [];
// function getLength(array) {
//   const strArray = array.join("");
//   return strArray.length
// }

// console.log(getLength(["Mango", "hurries", "to", "the", "train"])); // повертає 22
// console.log(getLength(["M", "a", "n", "g", "o"])); // 5
// console.log(getLength(["top", "picks", "for", "you"])); // 14


// !Метод split()
// Метод рядків split(delimiter) виконує зворотну операцію порівняно з методом масивів
// join(delimiter). Він дозволяє перетворити рядок на масив, розбивши його за вказаним
// роздільником delimiter.


// !====Задача====!
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування,
// залежно від кількості слів і ціни за слово.
// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає першим
// параметром рядок, що складається зі слів, розділених лише пробілами(параметр message)
// та другим параметром - число, що містить ціну гравірування за одне слово(параметр pricePerWord).
// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//     const messageMass = message.split(" ");
//     return messageMass.length * pricePerWord;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)) // 50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)) // 100
// console.log(calculateEngravingPrice("Web-development is creative work", 40)) // 160


// !Метод slice()
// Метод масиву slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву,
// не змінюючи його. Копія створюється від індексу begin до, але не включаючи індекс end.

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']

// ?Якщо не вказати параметри begin і end, буде створено повну копію вихідного масиву:
// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice()); // ["Earth", "Mars", "Venus", "Jupiter", "Saturn"]

// ?Якщо не вказати end, копіювання відбуватиметься від begin до кінця масиву:
// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(1)); // ["Mars", "Venus", "Jupiter", "Saturn"]
// console.log(planets.slice(2)); // ["Venus", "Jupiter", "Saturn"]

// ?Якщо значення begin негативне, а end не вказано, будуть скопійовані останні begin елементів
// ?(тобто стільки елементів з кінця, скільки вказано в параметрі begin):
// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]


// !Метод concat()
// Метод concat(arr1, arr2, ..., arrN) використовується для об'єднання двох або більше масивів.

// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const result = firstArray.concat(secondArray);

// console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];

// ?Порядок аргументів методу визначає порядок розташування елементів у новому масиві.
// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Neptune"];

// console.log(firstArray.concat(secondArray, thirdArray));
// // ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune'];

// console.log(firstArray.concat(thirdArray, secondArray));
// // ['Mercury', 'Venus', 'Saturn', 'Neptune', 'Mars', 'Jupiter', ];


// !Метод indexOf()
// Метод масиву indexOf(elem) використовується для визначення індексу першого входження
// елемента elem у масиві.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1


// !====Задача====!
// Функція getSlice(array, value) приймає два параметра:
// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value
// у масиві array і повертала:
// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно,
// якщо такий елемент є в array

// function getSlice(array, value) {
//     const index = array.indexOf(value);

//     if (index === -1) {
//         return []; // Повертаємо порожній масив, якщо значення відсутнє в масиві
//     } else {
//         return array.slice(0, index + 1); // Повертаємо підмасив від початку до елемента зі значенням value включно
//     }
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));


// !Метод push()
// Метод масиву push() використовується для додавання одного або більше елементів
// у кінець масиву.

// const planets = ["Earth", "Mars", "Venus"];

// planets.push("Jupiter");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

// planets.push("Saturn", "Neptune");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]


// const tags = [];

// for(let i = 0; i < 3; i += 1) {
// 	tags.push(`tag-${i}`);
// }

// console.log(tags); // ["tag-0", "tag-1", "tag-2"]


// !====Задача====!
// Функція createArrayOfNumbers(min, max) приймає два параметра:
// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення.
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала
// масив усіх цілих чисел від значення min до max включно.

// function createArrayOfNumbers(min, max) {
//   const num = [];
//   for(let i = min; i <= max; i += 1) {
// 	  num.push(i);
//   }
//   return num;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers());