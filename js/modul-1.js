// Вбудований скрипт

// Можна додати JavaScript-код прямо всередині тега <script> всередині тега <head>:


// <!DOCTYPE html>
// <html>
// <head>
//     <title>My HTML-page</title>
//     <script>
//         <!--Твій JavaScript-код тут-->
//         console.log("Hello, world");
//     </script>
// </head>
// <body>
//     <!-- Вміст сторінки -->
// </body>
// </html>


// Зовнішній скрипт

// По-перше, треба створити окремий файл із розширенням .js, що містить JavaScript-код. Потім під'єднати цей файл до HTML-сторінки за допомогою тега <script>, вказавши шлях до файлу в атрибуті src:


// <!DOCTYPE html>
// <html>
// <head>
//     <title>My HTML-page</title>
//     <script src="my-script.js" defer></script>
// </head>
// <body>
//     <!-- Вміст сторінки -->
// </body>
// </html>


// Суворий режим


// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>jc hw by Isus</title>
//   </head>
//   <body>
//     <script type="module" src="./js/modul-1.js" defer></script>
//   </body>
// </html>


// const // - не змінне
// let   // - змінне


// Конкатенація рядків

// const age = 24;
// const message = "Poly is " + age + " years old!";
// console.log(message); // Poly is 24 years old!

// Шаблонні рядки

// const guestName = "Mango";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"


// Оператори порівняння

// Всі звичайні(<, >, =, <=, >=)
// Ще - != - не дорівнює, == - схоже, === - точна копія.


// Основи функцій

// function add(a, b, c) {
//     return a + b + c      - return обов'язковий!
// }

//  console.log(add(15, 27, 10)); // буде сума (15, 27, 10)



// ===== Задачі =====

// Функція makeMessage(name, price) створює і повертає повідомлення про покупку.
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.
// name - назва товару
// price - ціна товару

// Доповни код функції таким чином, щоб вона повертала рядок
// "You picked <product name>, price per item is <product price> credits",
// де < product name > і < product price > - це значення параметрів name і price.
// Дуже зручно зробити цей рядок з використанням синтаксису шаблонних рядків.

// function makeMessage (name, price) {
//     return `You picked ${name}, price per item is ${price} credits`;
// }

// console.log(makeMessage('Radar', 6150)); // "You picked Radar, price per item is 6150 credits"
// console.log(makeMessage('Scanner', 3500)); // "You picked Scanner, price per item is 3500 credits"


// Оголоси функцію calculateTotalPrice, яка рахує загальну суму покупки. 
// Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
// orderedQuantity - перший параметр, кількість одиниць товару в замовленні;
// pricePerItem - другий параметр, ціна одиниці товару.
// Функція повинна повертати загальну суму покупки - результат множення кількості
// товарів на ціну одного.

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
// return orderedQuantity * pricePerItem
// }

// console.log(calculateTotalPrice(5, 100)); // 500
// console.log(calculateTotalPrice(8, 60)); // 480

