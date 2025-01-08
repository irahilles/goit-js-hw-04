// // // //--------------------------------- ОСНОВИ---------------------

// // // // Створення об'єкта: Створіть об'єкт person, який містить властивості ім'я, вік та професія.
// let person = {
//     name: 'Iryna',
//     age: 34,
//     proffesion: 'Fullstack Developer',
//     address: "Lviv",
// }
// // Доступ до властивостей: Виведіть на консоль ім'я створеного об'єкта person.
// console.log(person.name);
// // // Зміна властивостей: Змініть вік в об'єкті person на нове значення.
// person.age = 60;
// console.log(person.age);
// // // Додавання нових властивостей: Додайте до об'єкта person властивість місце_роботи зі значенням.
// // person.workPlace = 'GoIt';
// console.log(person);
// // Видалення властивостей: Видаліть властивість професія з об'єкта person.
// // delete person.proffesion;
// // // Пошук властивостей: Перевірте, чи існує властивість професія в об'єкті person.
// console.log(person);
// // Зведення декількох об'єктів: Створіть ще один об'єкт friend, який містить інформацію про вашого друга. Потім об'єднайте властивості об'єкта friend з об'єктом person.
// let friend = {
//     name1: 'Ahmed',
//     age1: 34,
//     proffesion: "Engineer",
// }
// for (const key in friend) {
//     person[key] = friend[key];
// };
// console.log(person);
// // Перебір властивостей: Виведіть всі властивості об'єкта person на консоль у вигляді ключ-значення.
// for (const key in person) {
//     console.log(`${key}: ${person[key]}`);
//   }
// // Методи об'єкта: Додайте до об'єкта person метод привітання, який буде виводити вітання з іменем особи.
//     console.log(`Hello ${person.name}`);
//       console.log(`Hello ${person.name1}`);
// // Застосування Object.keys(): Виведіть на консоль масив зі всіма ключами об'єкта person за допомогою функції Object.keys().
// console.log(Object.keys(person));
// // Напиши функцію, яка створює об'єкт з ім'ям і віком.
// // Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
// // Поверни цей об'єкт.
// function createObject(name, age){
// return obj = {
// name: name,
// age: age,
// };
// }
// console.log(createObject("Iryna", 34));
// // Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
// // Поверни оновлений об'єкт.
// function addAddress(obj, address){
//    obj.address = address;
//    return obj;
//     }
// const updatedPerson = addAddress(person, "123 Main Street");
// console.log(updatedPerson);
// // // // Напиши функцію, яка приймає об'єкт і новий вік.
// // // Функція повинна змінити значення властивості "age" в об'єкті на нове значення.
// // // Поверни оновлений об'єкт.
// function updateAge (person, newAge){
//     person.age = newAge;
//     return person;
// }
// console.log(updateAge(person, 25));

// // Напиши функцію, яка приймає об'єкт і видаляє з нього властивість "age".
// // Поверни оновлений об'єкт.
// function deleteAge (person){
//     delete person.age;
//     return person;
// }
// console.log(deleteAge(person));
// // Напиши функцію, яка приймає об'єкт і повертає значення властивості "name".
// function findName (person){
//     return person.name;
// }
// console.log(findName(person));
// // Напиши функцію, яка приймає об'єкт і повертає true, якщо властивість "address" існує в об'єкті, і false, якщо ні.
// function findAddress(person) {
//     if (person.address) {
//         return true;
//     }else {
//         return false;
//     }
// }
// console.log(findAddress(person));
// // // Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
// // // Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
// // // Поверни результат.
// function uniteObj (person, friend){
// return {...person, ...friend}
// }
// console.log(uniteObj(person, friend));
// // Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
// // Якщо ім'я та вік не передані, встанови їх значення за замовчуванням ("Unknown", 0 відповідно).
// // Поверни об'єкт.
// function createPerson(name = "Unknown", age = 0, address = "") {
//     return {
//       name,
//       age,
//       address
//     };
//   }
//   console.log(createPerson("Iryna", 34, "Abu Dhabi"));
// // Напиши функцію, яка приймає об'єкт та нові значення для імені та віку. Функція повинна змінити обидві властивості в об'єкті. Поверни оновлений об'єкт.
// function changeValues (person, newName, newAge){
//     person.name = newName;
//     person.age = newAge;
//     return person;
// }
// console.log(changeValues(person, "Baker", 6));
// // // Напиши функцію, яка приймає об'єкт та нову властивість "email" (якщо її немає).
// // // Якщо в об'єкті вже є "email", нічого не роби.
// // // Поверни оновлений об'єкт.
// function foo(person, email){
//     person.email = email;
//     return person;
// }
// console.log(foo(person, "irapart@gmail.com"));

// // Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age" з числа на рядок.
// // Поверни оновлений об'єкт.
// function changeToString(person) {
//     person.age = person.age.toString();
//     return person;
// }
// console.log(changeToString(person));
// // Напиши функцію, яка приймає об'єкт і змінює значення властивості "address", але тільки якщо ця властивість вже існує.
// // Якщо її немає, поверни об'єкт без змін.
// function changeValueAdd(person, newAdd) {
//     if ('address' in person) {
//          person.address = newAdd;  
//     }
//     return person; 
// }
// console.log(changeValueAdd(person, "Abu Dhabi"));

// // // Напиши функцію, яка приймає об'єкт користувача з властивостями name та сity. Та повертає рядок "User {імя користувача} from {місто користувача}!"
// function createStr (person, name, city){
//     return `${name} from ${city}!`
// }
// console.log(createStr(person, "iryna", "ABu DHabi"));

// // Напиши функцію, яка приймає масив з ключами і значеннями (наприклад, [["name", "John"], ["age", 25], ["address", "123 Street"]]) і створює об'єкт з цих пар. Поверни об'єкт.
// function createObjectFromPairs(pairs) {
//     const obj = {};
//     for (let i = 0; i < pairs.length; i++) {
//       const [key, value] = pairs[i];  // Деструктуризація масиву
//       obj[key] = value;  // Додаємо пару в об'єкт
//     }
//     return obj;  // Повертаємо об'єкт
//   }
//   console.log(createObjectFromPairs([["name", "John"], ["age", 25], ["address", "123 Street"]]));
  
// // // Напиши функцію, яка приймає масив об'єктів і змінює в кожному з них властивість "age", збільшуючи її на 1. Поверни оновлений масив об'єктів.
// function increaseAge(arrOfObj){
//     for(let i = 0; i<arrOfObj.length; i++){
//         arrOfObj[i].age += 1;
//     }
//     return arrOfObj;
// }
// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
//   ];
  
//   console.log(increaseAge(people));
// Створіть об'єкт contactBook, який зберігатиме список контактів та надаватиме методи для додавання, видалення та пошуку контактів.
// const contactBook = {
//     contact1: 'Ivan',
//     contact2: 'Petro',
//     contact3: 'Vasyl',
//     addContact(contactName, contactValue){this.contactName = contactValue},
//     deleteContact(contactName){ delete this.contactName},
//     findContact(contact){},
// }
// Створіть об'єкт rectangle, який представлятиме прямокутник з методами для обчислення його площі та периметра. Об'єкт повинен приймати довжини двох сторін під час створення.
// const rectangle = {
//     length: 0,
//     width: 0,
//     init(length, width) {
//         this.length = length;
//         this.width = width;
//     },
//     getArea(){
//    return this.length * this.width;
//     },
//     getPerimetr(){
//         return 2*(this.length + this.width);
//     },
// }
// rectangle.init(2, 3);
// console.log(rectangle.getArea());

// Створіть об'єкт toDoList, який зберігатиме список задач та надаватиме методи для додавання нових завдань, позначки задачі як виконаної та виведення списку завдань.
// const toDoList = {
//     tasks: [],
//     addTask(task){
//         this.tasks.push({ name: task, completed: false });
//     },
//     markAsCompleted(taskName) {
//         let taskFound = false;
//         for (let i = 0; i < this.tasks.length; i++) {
//             if (this.tasks[i].name === taskName) {
//                 this.tasks[i].completed = true;
//                 taskFound = true;
//                 break; 
//             }
//         }
//         if (!taskFound) {
//             console.log('Задачу "' + taskName + '" не знайдено.');
//         }
//     },
//     showListOfTasks() {
//         if (this.tasks.length === 0) {
//             console.log("Список задач порожній.");
//         } else {
//             for (let i = 0; i < this.tasks.length; i++) {
//                 const task = this.tasks[i];
//                 const status = task.completed ? "✔️ Виконано" : "❌ Не виконано";
//                 console.log((i + 1) + ". " + task.name + " - " + status);
//             }
//         }
//     },
// }
// toDoList.addTask("Прибрати квартиру");
// toDoList.addTask("Вивчити JavaScript");
// toDoList.markAsCompleted("Прибрати квартиру"); 
// toDoList.markAsCompleted("Зробити домашку");
// toDoList.showListOfTasks();
// Створіть об'єкт bankAccount, який представлятиме банківський рахунок із методами для депозиту, зняття коштів та перевірки балансу. Врахуйте обробку можливих помилок (наприклад, недостатньо коштів).
// Властивості:
// balance (поточний баланс)
// Методи:
// deposit(amount) - метод, що приймає суму та додає її до балансу.
// withdraw(amount) - метод, що приймає суму та знімає її з балансу (з перевіркою на достатність коштів).
// checkBalance() - метод, що повертає поточний баланс.
// const bankAccount = {
//     balance: 0,
//     deposit(amount){
//         this.balance += amount;
//         return this.balance;
//     },
//     withdraw(amount){
//         if(amount>this.balance){
//             console.log("Недостатньо коштів для зняття.")
//         }else{ this.balance -= amount;
//      }
//      return console.log(`Ви успішно зняли ${amount}. Поточний баланс: ${this.balance}.`);
//     },
//     checkBalance(){
//         return this.balance;
//     },
// }
// bankAccount.deposit(500); 
// bankAccount.withdraw(200); 
// bankAccount.checkBalance(); 

// bankAccount.withdraw(400); 
// bankAccount.deposit(-100); 
// Створіть об'єкт libraryCatalog, який зберігатиме список книг у бібліотеці та надаватиме методи для додавання нових книг, пошуку книг за автором та ISBN, а також виведення списку всіх книг.
// Властивості:
// books (масив книг)
// Методи:
// addBook(book) - метод, що приймає книгу та додає її до масиву книг.
// findBookByAuthor(author) - метод, що приймає ім'я автора та повертає книги цього автора.
// findBookByISBN(isbn) - метод, що приймає ISBN та повертає книгу з цим ISBN.
// listBooks() - метод, що виводить список всіх книг.
// const libraryCatalog = {
//     books: [],
//     addBook(book) {
//         if (!book.title || !book.author || !book.isbn) {
//             console.log("Книга повинна містити назву, автора та ISBN.");
//             return;
//         }
//         this.books.push(book);
//         console.log(`Книга "${book.title}" успішно додана до каталогу.`);
//     },
//     findBookByAuthor(author) {
//         let booksByAuthor = [];
//         for (let i = 0; i < this.books.length; i++) {
//             if (this.books[i].author === author) {
//                 booksByAuthor.push(this.books[i]);
//             }
//         }
//         if (booksByAuthor.length > 0) {
//             return booksByAuthor;
//         } else {
//             console.log(`Книги автора "${author}" не знайдено.`);
//             return [];
//         }
//     },
//     findBookByISBN(isbn) {
//         for (let i = 0; i < this.books.length; i++) {
//             if (this.books[i].isbn === isbn) {
//                 return this.books[i];
//             }
//         }
//         console.log(`Книгу з ISBN "${isbn}" не знайдено.`);
//         return null;
//     },
//    listBooks() {
//     if (this.books.length === 0) {
//         console.log("Каталог книг порожній.");
//     } else {
//         console.log("Список книг у каталозі:");
//         for (let i = 0; i < this.books.length; i++) {
//             console.log(
//                 `${i + 1}. Назва: "${this.books[i].title}", Автор: "${this.books[i].author}", ISBN: "${this.books[i].isbn}"`
//             );
//         }
//     }
// },
// }
// libraryCatalog.addBook({ title: 'Seven Shades of Gray', author: 'John Smith', isbn: 23564 });
// libraryCatalog.addBook({ title: 'Another Book', author: 'Jane Doe', isbn: 12345 });

// console.log(libraryCatalog.findBookByAuthor('John Smith')); 
// console.log(libraryCatalog.findBookByISBN(23564)); 
// libraryCatalog.listBooks();

// Створіть об'єкт temperatureConverter, який матиме методи для конвертації температур між градусами Цельсія та Фаренгейта.// Створити об'єкт temperatureConverter:
// Методи:
// celsiusToFahrenheit(celsius) - метод, що приймає температуру в градусах Цельсія та повертає її в градусах Фаренгейта.
// fahrenheitToCelsius(fahrenheit) - метод, що приймає температуру в градусах Фаренгейта та повертає її в градусах Цельсія.

// Створіть об'єкт shoppingCart, який зберігатиме список товарів та надаватиме методи для додавання товарів, підрахунку загальної вартості та виведення списку товарів.
// Властивості:
// items (масив товарів)
// Методи:
// addItem(item) - метод, що приймає товар та додає його до кошика.
// totalCost() - метод, що підраховує та повертає загальну вартість всіх товарів у кошику.
// listItems() - метод, що виводить список всіх товарів у кошику.
// const shoppingCart = {
//     items: [],
//     addItem(item){
//      this.items.push(item);
//     },
//     totalCost(){
//         let totalCost = 0;
//         for(const item of this.items){
//             totalCost += item.price;
//         }
//         return totalCost;
//     },
//     listItem(){
//          for(const item of this.items){
//             return `Name of the product: ${item.name}, price: ${item.price}`;
//          }
//     },
// }
// shoppingCart.addItem({ name: "Яблуко", price: 10 });
// shoppingCart.addItem({ name: "Банан", price: 15 });
// shoppingCart.addItem({ name: "Молоко", price: 20 });

// console.log("Список товарів:");
// console.log(shoppingCart.listItem());

// console.log("Загальна вартість:");
// console.log(shoppingCart.totalCost());
// Створіть об'єкт socialNetworkUser, який представляє користувача соціальної мережі з полями username, friends (список друзів) та методами для додавання та видалення друзів, а також виведення списку друзів.
// Властивості:
// username (ім'я користувача)
// friends (масив друзів)
// Методи:
// addFriend(friendName) - метод, що приймає ім'я друга та додає його до списку друзів.
// removeFriend(friendName) - метод, що приймає ім'я друга та видаляє його зі списку друзів.
// listFriends() - метод, що виводить список всіх друзів.
// const socialNetworkUser = {
//     username: "DefaultUser",
//     friends: [],
//     addFriend(friendName){
//         this.friends.push(friendName);
//     },
//     removeFriend(friendName) {
//         const index = this.friends.indexOf(friendName);
//         if (index !== -1) {
//             this.friends.splice(index, 1);
//         } else {
//             console.log(`${friendName} не знайдено у списку друзів.`);
//         }
//     },
//     listFriends(){
//      return this.friends.join(', ');
        
//     },
// }
// socialNetworkUser.addFriend('Olga Koval');
// socialNetworkUser.addFriend('Iryna Hilles');
// socialNetworkUser.addFriend('Roman Partyka'); 
// socialNetworkUser.addFriend('Yulia Frizorher');
// console.log(socialNetworkUser.listFriends());
// socialNetworkUser.removeFriend('Roman Partyka'); 
// console.log(socialNetworkUser.listFriends());
// // Створіть об'єкт musicPlayer, який зберігатиме список пісень та надаватиме методи для додавання нових пісень, відтворення, паузи та перемикання між піснями.
// // Властивості:
// // songs (масив пісень)
// // currentSong (індекс або ідентифікатор поточної пісні)
// // Методи:
// // addSong(song) - метод, що приймає пісню та додає її до списку пісень.
// // play() - метод, що відтворює поточну пісню.
// // pause() - метод, що ставить відтворення на паузу.
// // next() - метод, що перемикає на наступну пісню.
// // previous() - метод, що перемикає на попередню пісню.
// const musicPlayer = {
//     songs: [],
//     currentSong: 0,
//     addSong(song){
//         this.songs.push(song);
//     },
//     play(){
// if(this.songs.length === 0){
//     console.log("Список пісень порожній. Додайте пісні.")
//     return;
// }
// console.log(`Song ${this.songs[this.currentSong]} is playing`)
//     },
//     pause(){
//         if(this.songs.length === 0){
//             console.log("Список пісень порожній. Нічого ставити на паузу.")
//             return;
//         }
//         console.log(`Song ${this.songs[this.currentSong]} is paused`)  
//     },
//     next(){
//         if(this.songs.length === 0){
//             console.log("Список пісень порожній. Немає наступної пісні.")
//             return;
//         }
//         this.currentSong = (this.currentSong + 1) % this.songs.length;
//         this.play();
//     },
//     previous(){
//         if(this.songs.length === 0){
//             console.log("Список пісень порожній. Немає попередньої пісні.")
//             return;
//         }
//         this.currentSong = (this.currentSong - 1 + this.songs.length) % this.songs.length;
//         this.play();
//     },
//     }
//     musicPlayer.addSong("Imagine - John Lennon");
//     musicPlayer.addSong("Bohemian Rhapsody - Queen");
//     musicPlayer.addSong("Hotel California - Eagles");
    
//     console.log("Починаємо відтворення:");
//     musicPlayer.play();
    
//     console.log("Наступна пісня:");
//     musicPlayer.next();
    
//     console.log("Попередня пісня:");
//     musicPlayer.previous();
    
//     console.log("Пауза:");
//     musicPlayer.pause();
// Створіть об'єкт myString, який буде мати наступні методи: метод reverse(), який параметром приймає рядок, а повертає його в перевернутому вигляді; метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру заголовною; і метод ucWords(), який приймає рядок і робить заголовною першу літеру кожного слова цього рядка.
// Методи:
// reverse(str) - метод, що приймає рядок та повертає його в перевернутому вигляді.
// ucFirst(str) - метод, що приймає рядок та повертає цей же рядок, зробивши його першу літеру заголовною.
// ucWords(str) - метод, що приймає рядок та робить заголовною першу літеру кожного слова цього рядка.
myString = {
    reverse(str){
 return str.split('').reverse().join('');
    },
    ucFirst(str){
        if (!str) return "";
return str[0].toUpperCase() + str.slice(1);
    },
    ucWords(str){
        if (!str) return "";
        const words = str.split(' ');
        let result = '';
        for (let i = 0; i < words.length; i++) {
            const capitalizedWord = this.ucFirst(words[i]);
            result += capitalizedWord; 
            if (i < words.length - 1) {
                result += " "; 
            }
        }
        return result;
    },
}
console.log(myString.reverse("hello")); 
console.log(myString.ucFirst("hello world")); 
console.log(myString.ucWords("hello world, how are you?"));
// Створіть об'єкт validator, який перевірятиме рядки. Наприклад, у нього буде метод isEmail, що параметром приймає рядок і перевіряє, чи є він коректним емейлом чи ні. Якщо є – повертає true, якщо не є – то false. Крім того, об'єкт буде мати такі методи: метод isDomain для перевірки домену, метод isDate для перевірки дати і метод isPhone для перевірки телефону.
// Методи:
// isEmail(str) - метод, що приймає рядок та перевіряє, чи є він коректним емейлом. Повертає true або false.
// isDomain(str) - метод, що приймає рядок та перевіряє, чи є він коректним доменом. Повертає true або false.
// isDate(str) - метод, що приймає рядок та перевіряє, чи є він коректною датою. Повертає true або false.
// isPhone(str) - метод, що приймає рядок та перевіряє, чи є він коректним номером телефону. Повертає true або false.
const validator = {
    // Перевірка, чи є рядок електронною поштою
    isEmail(str) {
        const atIndex = str.indexOf('@'); // Перевіряємо наявність символу '@'
        const dotIndex = str.indexOf('.', atIndex); // Перевіряємо наявність точки після '@'
        
        if (atIndex === -1 || dotIndex === -1 || atIndex > dotIndex) {
            return false; // Якщо немає '@' або '.' після '@', або '@' перед '.', то це не email
        }
        return true;
    },

    // Перевірка, чи є рядок доменом
    isDomain(str) {
        const dotIndex = str.indexOf('.');
        if (dotIndex === -1 || dotIndex === 0 || dotIndex === str.length - 1) {
            return false; // Якщо немає точки, або точка на початку/в кінці рядка
        }
        const domainPart = str.slice(dotIndex + 1); // Частина після точки
        if (domainPart.length < 2) {
            return false; // Домен має бути не менше двох символів
        }
        return true;
    },

    // Перевірка, чи є рядок датою у форматі YYYY-MM-DD
    isDate(str) {
        const parts = str.split('-');
        if (parts.length !== 3) return false; // Має бути 3 частини: рік, місяць, день
        const year = parseInt(parts[0]);
        const month = parseInt(parts[1]);
        const day = parseInt(parts[2]);
        
        if (isNaN(year) || isNaN(month) || isNaN(day)) return false; // Перевірка на NaN
        if (month < 1 || month > 12) return false; // Місяць має бути від 1 до 12
        if (day < 1 || day > 31) return false; // День має бути від 1 до 31
        return true;
    },

    // Перевірка, чи є рядок номером телефону у форматі E.164
    isPhone(str) {
        if (str.charAt(0) !== '+' || str.length < 10) return false; // Номер має починатися з '+' і бути довшим за 9 символів
        const number = str.slice(1); // Відрізаємо '+' і перевіряємо тільки цифри
        for (let i = 0; i < number.length; i++) {
            if (isNaN(Number(number.charAt(i)))) {
                return false; // Якщо є нецифрові символи
            }
        }
        return true;
    }
};

// Приклад використання:
console.log(validator.isEmail("example@example.com")); // true
console.log(validator.isEmail("invalid-email")); // false

console.log(validator.isDomain("example.com")); // true
console.log(validator.isDomain("not-a-domain")); // false

console.log(validator.isDate("2025-01-01")); // true
console.log(validator.isDate("01-01-2025")); // false

console.log(validator.isPhone("+1234567890")); // true
console.log(validator.isPhone("123-456-7890")); // false
