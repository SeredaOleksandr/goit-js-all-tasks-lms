// !!!Розгалуження
// !!!Інструкція if

// let price = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   price = 100;
// }

// console.log(price); // 100

// !====Задача====!
// Доповни код функції checkAge(age) так, щоб функція повертала рядок "You are an adult",
// якщо значення параметра age більше або дорівнює 18. Використай у тілі функції
// інструкцію if для перевірки значення age.

// function checkAge(age) {
//     if (age >= 18) {
//         message = "You are an adult";
//     }
//     if (age <= 18) {
//         message = undefined;
//     }
//     return message;
// }

// console.log(checkAge(20)) // "You are an adult"
// console.log(checkAge(17)) // undefined


// !Інструкція if...else

// const grade = 85;

// if (grade >= 70) {
//   console.log("Satisfactorily");    - Якщо true - виведе це
// } else {
//   console.log("Unsatisfactorily");  - якщо false - виведе це
// }


// !====Задача====!
// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення
// і повертає повідомлення про результат. Вона оголошує два параметри, значення яких
// будуть задаватися під час її виклику:
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:

// Якщо в замовленні вказане число, яке перевищує доступну кількість товарів на складі,
// функція повертає рядок "Not enough goods in stock!"
// В іншому випадку функція повертає рядок "Order is processed, our manager will contact you"


// function checkStorage(available, ordered) {
//     if (ordered <= available) {
//         return "Order is processed, our manager will contact you"
//     } else {
//         return "Not enough goods in stock!"
//     }
// }

// console.log(checkStorage(100, 50)) // "Order is processed, our manager will contact you"
// console.log(checkStorage(100, 130)) // "Not enough goods in stock!"


// !Блок else...if

// const grade = 85;

// if (grade >= 90) {
//   console.log("Perfectly");
// } else if (grade >= 80) {
//   console.log("Good");
// } else if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }


// !====Задача====!
// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення
// і повертає повідомлення про результат.Вона оголошує два параметри, значення яких
// будуть задаватися під час її виклику.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, щоб:

// Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0,
// функція повертає рядок "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж їх доступно на складі, то функція повертає рядок
// "Your order is too large, there are not enough items in stock!".
// В іншому випадку функція повертає рядок "The order is accepted, our manager will contact you".

// function checkStorage(available, ordered) {
//     if (ordered === 0) {
//         return "There are no products in the order!"
//     } else if (ordered <= available) {
//         return "The order is accepted, our manager will contact you"
//     } else {
//         return "Your order is too large, there are not enough items in stock!"
//     }
// }

// console.log(checkStorage(100, 50))
// console.log(checkStorage(100, 130))
// console.log(checkStorage(70, 0))


// !Тернарний оператор - Якщо тільки 2 варіанта if...else

// ?Замість
// let type;
// const age = 20;

// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }

// console.log(type); // 'adult'

// ?Корочше
// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type); // 'adult'


// !====Задача====!
// Функція checkPassword(password) порівнює переданий їй пароль(параметр password)
// зі збереженим паролем адміністратора(correctPassword) і повертає рядок
// з повідомленням про результат.
// Використовуючи тернарний оператор, доповни функцію таким чином, щоб:
// Якщо значення password і correctPassword збігаються, функція повертала рядок "Access granted"
// В іншому випадку, функція повертала рядок "Access denied, wrong password!"

// function checkPassword(password) {
//   const correctPassword = 'jqueryismyjam';

//   return password === 'jqueryismyjam'
//       ? 'Access granted'
//       : 'Access denied, wrong password!';
// }

// console.log(checkPassword('jqueryismyjam'));
// console.log(checkPassword('angul4r1sl1f3'));


// !!!Оператор switch

// const fruit = 'apple';

// switch (fruit) {
//   case 'apple':
//     console.log('Apple selected');
//     break;                          // Коли виконання коду блоку case завершено, необхідно використовувати оператор break, щоб вийти зі switch.
//   case 'banana':
//     console.log('Banana selected');
//     break;
//   case 'orange':
//     console.log('Orange selected');
//     break;
//   default:                              // Якщо жодне значення не відповідає виразу, виконається код у блоці default (якщо він є).
//     console.log('The fruit is unknown');
// }


// !====Задача====!
// Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача(параметр type),
// перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну,
// або повідомлення про неправильний тип передплати.
// Якщо значення параметра type — це рядок:
// "starter" — ціна передплати 0 кредитів.
// "professional" — ціна передплати 20 кредитів.
// "organization" — ціна передплати 50 кредитів.
// Для будь-якого іншого значення параметра type повертається рядок "Invalid subscription type!".
// Використай оператор switch для розв'язання цієї задачі!

// function getSubscriptionPrice(type) {
//     let price;
//     switch (type) {
//         case "starter":
//             price = 0;
//             break;
        
//     case "professional":
//             price = 20;
//             break;
    
//     case "organization":
//             price = 50;
//             break;
    
//         default:
//             return "Invalid subscription type!";
//     }

//     return price;
// }

// console.log(getSubscriptionPrice("professional"))
// console.log(getSubscriptionPrice("organization"))
// console.log(getSubscriptionPrice("starter"))
// console.log(getSubscriptionPrice("random"));


// !!!Логічні оператори

// if(5) {
// 	console.log("Block if") - true
// } else {
// 	console.log("Block else") - false
// }

// ?Запам’ятай 6 випадків, які приводяться до false:
// 1. 0
// 2. ""
// 3. Nan
// 4. null
// 5. underfined
// 6. false

// console.log(Boolean("")); // false
// console.log(Boolean("hello")); // true


// !Логічне «І»

// console.log("hello" && 5); // 5
// console.log(5 && "hello"); // "hello"
// При обидвох true - вибирає правий.

// console.log("hello" && 0); // 0
// console.log(0 && "hello"); // 0
// При першому false - вибирає його.

// ?Оператор && може бути не тільки самостійною умовою, а й частиною більш складних умов,
// наприклад, в умові інструкції if

// const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;

// if(screenWidth <= sm) {
// 	console.log("Mobile screen");
// } else if(screenWidth > sm && screenWidth <= md) {
// 	console.log("Tablet screen");
// } else if(screenWidth > md && screenWidth <= lg) {
// 	console.log("Desktop screen");
// } else {
// 	console.log("Godzilla screen");
// }


// !====Задача====!
// Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок.
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:
// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Використовуючи оператор &&, доповни функцію isNumberInRange таким чином,
// щоб вона повертала результат входження number у числовий проміжок від start до end включно.
// Тобто число повинно бути одночасно і більшим або дорівнювати start, і меншим або дорівнювати end.
// Результатом виклику функції має бути буль true або false.

// function isNumberInRange(start, end, number) {
//   return number >= start && number <= end;
// }

// console.log(isNumberInRange(10, 30, 17))
// console.log(isNumberInRange(10, 30, 5))


// !Логічне «АБО»

// Якщо хоча б один із операндів можна перетворити на true, результатом логічного «АБО»
// буде цей операнд.

// console.log(true || false); // true
// console.log(false || true); // true

// console.log(5 || 3); // 5
// console.log(3 || 5); // 3
// При обидвох false - обирає лівий.


// !====Задача====!
// Функція checkAccess(subType) перевіряє, чи може користувач отримати доступ до контенту.
// Перевірка відбувається за типом передплати.Використовуючи оператор "АБО",
// доповни код функції так, щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip",
// то функція повертала true і користувач отримував доступ.В іншому випадку повертала false.

// function checkAccess(subType) {
//   return subType == "pro" || subType == "vip";
// }

// console.log(checkAccess("pro"))
// console.log(checkAccess("starter"))
// console.log(checkAccess("vip"))
// console.log(checkAccess("free"))


// !Логічне «НІ»

// console.log(!true); // false
// console.log(!false); // true
// Ставиться ліворуч того, що потрібно заперечити.

// const isOnline = true;
// const isBlocked = false;
// const canChat = isOnline && !isBlocked;
// true && !false -> true && true -> true

// if(canChat) {
// 	console.log("Can type in chat!")
// } else {
// 	console.log("Blocked from typing in chat!")
// }


// !====Задача====!
// Функція toggleModalVisibility(isVisible) перемикає стан відображення модального вікна.
// У параметрі isVisible вона очікує буль true або false.Доповни код функції так,
// щоб вона повертала протилежне значення цього параметра.

// function toggleModalVisibility(isVisible) {
//   return !isVisible
// }

// console.log(toggleModalVisibility(true)) // false
// console.log(toggleModalVisibility(false)) // true


// !!!Методи рядків

// !Метод slice()
// Створення копії частини або всього рядка без зміни оригінального рядка
// str.slice(startIndex, endIndex)

// const fullName = "Jacob Mercer";
// console.log(fullName.slice(0, 4)); // 'Jaco'
// console.log(fullName.slice(3, 9)); // 'ob Mer'
// console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'

// const fullName = "Jacob Mercer";
// console.log(fullName.slice(1)); // 'acob Mercer'
// console.log(fullName.slice(3)); // 'ob Mercer'

// const fullName = "Jacob Mercer";
// console.log(fullName.slice()); // 'Jacob Mercer'


// !====Задача====!
// Функція getSubstring(string, length) приймає рядок і повертає новий підрядок
// (його часткову копію). Вона оголошує два параметри, значення яких будуть задаватися
// під час її виклику:
// string - оригінальний рядок
// length - довжина нового підрядка
// Доповни код функції так, щоб вона повертала новий підрядок, який починається
// від початку string і має довжину length.

// function getSubstring(string, length) {
//   return string.slice(0, length)
// }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 5));


// !Методи toLowerCase() і toUpperCase()
// toLowerCase() - Всі маленькі
// toUpperCase() - Всі великі

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message); // "Welcome to Bahamas!

// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"


// !====Задача====!
// Функція normalizeInput(input, to) оголошує два параметри:
// input - рядок, який потрібно привести до певного регістру
// to - рядок с двома можливими значеннями: "upper" або "lower", що вказують
// до якого регістру потрібно привести значення input
// Доповни код функції таким чином, щоб:
// Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input,
// але у верхньому регістрі
// В іншому разі, функція повертала копію рядка inputу нижньому регістрі

// function normalizeInput(input, to) {
// return to === "lower" ? input = input.toLowerCase() : input = input.toUpperCase();
// }
  
// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("This ISN'T SpaM", "upper"));
// console.log(normalizeInput("Big SALE", "lower"));
// console.log(normalizeInput("Big SALE", "upper"));


// !Метод includes()
// Для перевірки наявності підрядка у рядку

// const username = 'Jacob Mercer';

// console.log(username.includes('Jacob')); // true
// console.log(username.includes('John')); // false


// !====Задача====!
// Функція checkForName(fullName, firstName) приймає два параметри та повертає буль
// true або false - результат перевірки входження підрядка firstName у рядок fullName.
// fullName - рядок, що містить повне ім'я
// firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
// Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження
// імені (параметр firstName), у повне ім'я (параметр fullName). Врахуй, що регістр
// символів в параметрах fullName і firstName наперед не відомий. Перед перевіркою входження
// не забудь прирівняти їх до однакового регістру.

// function checkForName(fullName, firstName) {
//   const lowerFullName = fullName.toLowerCase();
//   const lowerFirstName = firstName.toLowerCase();
//   const isOk = lowerFullName.includes(lowerFirstName);
//   return isOk
// }

// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "jAsOn"));
// console.log(checkForName("Jason Neis", "Jacob"));


// !Методи startsWith() і endsWith()
// Призначені для перевірки початку й закінчення рядка відповідно.


// !====Задача====!
// Функція checkFileExtension(fileName, ext) приймає два параметри:
// fileName - рядок, що зберігає ім'я файлу з розширенням, наприклад, styles.css, hello.js тощо.
// ext - рядок, що зберігає розширення, наприклад, .css, .js тощо
// Доповни код функції так, щоб:
// Якщо ім'я файлу fileName закінчується розширенням, зазначеним у параметрі ext,
// то функція повертала рядок "File extension matches"
// В іншому разі, функція повертала рядок "File extension does not match"

// function checkFileExtension(fileName, ext) {
//    isOk = fileName.endsWith(ext) ? "File extension matches" : "File extension does not match";
//    return isOk
// }

// console.log(checkFileExtension("styles.css", ".css"));
// console.log(checkFileExtension("styles.css", ".js"));
// console.log(checkFileExtension("app.js", ".js"));


// !Метод indexOf()
// Використовується для пошуку першого входження підрядка в рядок

// const message = "Welcome to Bahamas!";
// const index = message.indexOf("to");
// console.log(index); // 8

// const message = "Welcome to Bahamas!";
// const index = message.indexOf("hello");
// console.log(index); // -1              - Так показує, коли немає


// !====Задача====!
// Функція getFileName(file) приймає один параметр
// file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад:
// styles.css, app.js або без, наприклад: styles, app.
// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:
// Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється
// від імені файла крапкою)
// Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок,
// що містить ім'я файлу без змін. В іншому разі функція повертала підрядок з іменем файлу,
// але без розширення

// function getFileName(file) {
//   extensionIndex = file.indexOf('.');
//   if (extensionIndex === -1) {
//     return file; // Якщо розширення відсутнє, повертаємо тільки ім'я файлу
//   } else {
//     return file.slice(0, extensionIndex); // Якщо є розширення, повертаємо ім'я файлу без розширення
//   }
// }

// console.log(getFileName("styles.css"));
// console.log(getFileName("app.js"));
// console.log(getFileName("app"));


// !Метод trim()
// Використовується для видалення початкових і кінцевих пробілів із рядка

// const input = " JavaScript is awesome!    ";
// const trimmedInput = input.trim();
// console.log(trimmedInput); // "JavaScript is awesome!"


// !====Задача====!
// Функція createFileName(name, ext) приймає два параметри:
// name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач.
// Воно може містити зайві пробіли на початку або в кінці рядка,
// наприклад "order ", " finance " тощо
// ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо
// Використовуючи синтаксис шаблонних рядків і метод trim(), доповни код функції таким чином,
// щоб вона повертала повне(об'єднане) ім'я файлу з доданим розширенням, зазначеним
// у параметрі ext у форматі ім'я.розширення. Також повне ім'я файлу не повинно містити зайвих
// пробілів на початку або наприкінці.

// function createFileName(name, ext) {
//   nameCorr = name.trim();
//   return `${nameCorr}.${ext}`
// }
  
// console.log(createFileName(" order ", "txt"));
// console.log(createFileName("report ", "csv"));
// console.log(createFileName(" presentation", "xml"));


// !!!Цикли
// !Цикл while

// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }


// !===Задача: Реєстрація у готелі===!
// Змінна clientCounter зберігає кількість зайнятих номерів на поточний момент.
// Змінна maxClients зберігає загальну кількість номерів у готелі.
// Завдяки циклу while місця в готелі будуть заповнюватися доти, доки поточна
// кількість клієнтів не дорівнюватиме максимально допустимій.

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }


// !====Задача====!
// Функція calculateTotal(number) приймає ціле число (параметр number).
// Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці
// до цього числа включно.Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//   let total = 0;
//   let i = 1;
//   while (i <= number) {
//       total += i;
//       i++;
//   }
//   return total;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));


// !Цикл do…while
// Під час використання циклу do...while код у тілі циклу виконується принаймні один раз,
// навіть якщо умова не виконується з самого початку.

// let count = 0;

// do {
// 	console.log(`Count: ${count}`); - 0 завжди буде
// 	count += 1;
// } while (count < 5);


// !Цикл for
// Цикл for має змінну-лічильник. Змінна-лічильник оголошується за допомогою ключового слова let

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }


// !====Задача====!
// Функція calculateTotal(number) приймає ціле число(параметр number)
// Використовуючи цикл for, доповни код функції так, щоб вона повертала
// суму всіх цілих чисел від одиниці до цього числа включно. Наприклад,
// якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(0));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));


// !Інкремент і декремент
// Інкремент(++) і декремент(--) — це операції, які відповідно збільшують
// або зменшують значення числової змінної на одиницю і одразу ж зберігають
// оновлене значення у цій змінній.

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }


// !====Задача====!
// Функція calculateEvenTotal(number) приймає ціле число (параметр number).
// Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел
// від одиниці до цього числа включно. Парні числа — це ті, що можна поділити
// на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у модулі 1).
// Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.

// function calculateEvenTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i += 2) {
//     total += i;
//   }
//   return total;
// }

// console.log(calculateEvenTotal(1));
// console.log(calculateEvenTotal(3));
// console.log(calculateEvenTotal(7));
// console.log(calculateEvenTotal(18));
// console.log(calculateEvenTotal(27));


// !Оператор break
// використовується в циклі для переривання його виконання


// !====Задача====!
// Доповни код таким чином, щоб у змінну number записувалося перше число
// у проміжку від start до end, яке ділиться на 5 без остачі.

// let start = 6;
// let end = 17;
// let number;

// function firstNumber5(start, end) {
//   for (let i = start; i <= end; i++) {
//     if (i % 5 === 0) {
//         number = i;
//         break; // Виходимо з циклу, якщо знайшли перше число, що ділиться на 5 без остачі
//     }
//   }

//   return number;
// }

// console.log(firstNumber5(6, 17))
// console.log(firstNumber5(17, 25))
// console.log(firstNumber5(2, 11))


// !Оператор break і функції
// Коли оператор break зустрічається всередині циклу, виконання
// циклу негайно припиняється, і керування передається на наступну
// інструкцію за циклом, навіть якщо цикл знаходиться всередині функції.
// Тобто оператор break не припиняє виконання функції, а тільки перериває цикл.

// function findNumberFromFive(max, target) {
// 	console.log("Log in the body of the function before the cycle");

//   for (let i = 5; i <= max; i += 1) {
//     console.log("Current counter value i:", i);

//     if (i === target) {
//       console.log(`Found the number $ {target}, interrupt the cycle`);
// 			break;
//     }
//   }

//   console.log("Log in body function after cycle");
// }

// findNumber(10, 6);
// console.log("Log after exiting function");

// Для того щоб переривати виконання одразу циклу і функції і повернути
// результат у зовнішній код, є оператор return.

// function findNumberFromFive(max, target) {
// 	console.log("Log in the body of the function before the cycle");

// 	for (let i = 5; i <= max; i += 1) {
// 	    console.log("Current counter value i:", i);
	
// 	    if (i === target) {
// 	      console.log(`Found the number $ {target}, we make a return, interrupting the loop and function`);
// 				return i;
// 	    }
// 	  }

  // Цей console.log не виконується
//   console.log("Log in body function after cycle");
// }

// const result = findNumber(10, 6);
// console.log("Log after exiting function");
// console.log(`Result of function execution ${result}`);


// !====Задача====!
// Функція findNumber(start, end, divisor) приймає три параметра,
// які є цілими числами.
// Доповни код функції таким чином, щоб вона:
// повертала перше число у діапазоні від start до end включно,
// яке ділиться на divisor без остачі.
// Не використовуй оператор break.

// function findNumber(start, end, divisor) {
//   let number;
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }
// }

// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));