// Написати систему контролю банку.

// Властивості:
// - список користувачів [userId, FIO,'password']
// - список рахунків [userId, accountNumber, value]

// Методи:
// - додати користувача
// - видалити користувача

// - створити рахунок
// - видалити рахунок

// - додати гроші на рахунок
// - зняти гроші з рахунка

// const bankControl = {
//     users: [],
//     accounts: [],
//     addUser(userId, FIO, password){
//       this.users.push({userId, FIO, password});
//     },
//     deleteUser(userId){
//         const index = this.users.findIndex(user => user.userId === userId);
//         this.users.splice(index, 1);
//     },
//     createAccount(userId, accountNumber, value = 0){
//         this.accounts.push({ userId, accountNumber, balance: value });
//     },
//     deleteAccount(accountNumber){
// const indexOfAcc = this.accounts.findIndex(account => account.accountNumber === accountNumber);
// this.accounts.splice(indexOfAcc, 1);
//     },
//     deposit(accountNumber, amount){
// const account = this.accounts.find(acc => acc.accountNumber === accountNumber);
// if(account){
//     account.balance+=amount;
// }
//     },
//     withdraw(accountNumber, amount){
//         const account = this.accounts.find(acc => acc.accountNumber === accountNumber);
//         if(account){
//            if(account.balance>=amount) {account.balance-=amount;}
//         }
//     },
// }

// bankControl.addUser(1, 'Ivan Petrenko', 'password123');
// bankControl.addUser(2, 'Olga Shevchenko', 'qwerty');

// // Створюємо рахунки з початковим балансом
// bankControl.createAccount(1, 101, 500);
// bankControl.createAccount(2, 102, 1000);

// // Поповнюємо рахунки
// bankControl.deposit(101, 200);  // Account 101, balance will become 700
// bankControl.deposit(102, 500);  // Account 102, balance will become 1500

// // Зняття грошей
// bankControl.withdraw(101, 300); // Account 101, balance will become 400
// bankControl.withdraw(102, 2000); // Insufficient funds for Account 102

// // Видалення користувачів та рахунків
// bankControl.deleteUser(1);
// bankControl.deleteAccount(101);

// console.log(bankControl.users);
// console.log(bankControl.accounts);



// Менеджер завдань: Створіть функцію яка створює та повертає обьект завдання. Об'єкт task, який буде містити властивості Name, deadline, priority та done. Додайте методи для відмітки завдання як виконаного та для виведення інформаціїпро завдання.




// Каталог товарів: Створіть каталог товарів, де кожен товар буде об'єктом з властивостями назва, ціна та кількість. Додайте методи для додавання товару, видалення товару та підрахунку загальної вартості.
// const catalog = {
//     products: [],
//    addProduct(name, price, quantity){
//     this.products.push({name, price, quantity});
//    },
//    deleteProduct(name, price, quantity){
//     const index = this.products.findIndex(product => product.name === name);
//     this.products.splice(index, 1);
//    },
//    calculateTotalPrice(name, price, quantity){
//  return this.products.reduce((total, product)=> total + product.price*product.quantity, 0);
//        },
//        listProducts(){
//         this.products.forEach(product => {
//             console.log(`Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`)});
//        },
// }
// catalog.addProduct("Laptop", 1500, 5);
// catalog.addProduct("Smartphone", 700, 10);
// catalog.addProduct("Tablet", 400, 7);
// catalog.listProducts();
// catalog.deleteProduct("Smartphone");
// const totalPrice = catalog.calculateTotalPrice();
// console.log(`Total value of all products: $${totalPrice}`);
// catalog.listProducts();

// Система реєстрації: Створіть систему реєстрації користувачів, де кожен користувач буде об'єктом з властивостями ім'я, email, пароль тощо. Додайте метод для перевірки введеного пароля при вході.
// const userRegistrationSystem = {
//     users: [],

//     registerUser(name, email, password) {
//         const existingUser = this.users.find(user=> user.email === email);
//        if(!existingUser){
//         this.users.push({name, email, password});
//         console.log(`User ${name} has been successfully registered`);
//        }else{console.log('Sorry, this email already exist')}
//     },

//     login(email, enteredPassword) {
//         const user = this.users.find(user => user.email === email);
//         if(!user){
//              console.log('User with this email is not registered.')
//         }else if(this.users.password === enteredPassword){
//             console.log(`Welcome, ${user.name}! You have successfully logged in.`)
//         }else{console.log("Incorrect password. Please try again.")}
//     },

//     listUsers() {
//         console.log("Registered Users:");
//         this.users.forEach(user=> console.log(`Name: ${user.name}, Email: ${user.email}`));
//     }
// };

// userRegistrationSystem.registerUser("John Doe", "john@example.com", "password123");
// userRegistrationSystem.registerUser("Jane Smith", "jane@example.com", "mypassword");
// userRegistrationSystem.registerUser("Alice Brown", "alice@example.com", "securepass");

// // Повторна реєстрація з тим самим email
// userRegistrationSystem.registerUser("John Doe", "john@example.com", "newpassword");

// // Вивід списку користувачів
// userRegistrationSystem.listUsers();

// // Вхід користувачів
// userRegistrationSystem.login("john@example.com", "password123"); // Успішний вхід
// userRegistrationSystem.login("jane@example.com", "wrongpassword"); // Невірний пароль
// userRegistrationSystem.login("notregistered@example.com", "password123"); // Користувач не зареєстрований


// Онлайн-книга: Створіть програму для ведення списку прочитаних книг. Кожна книга буде об'єктом з властивостями назва, автор, рік видання та прочитано (true/false). Додайте методи для відмітки книги як прочитаної та виведення статистики про прочитані книги.
// const listOfBooks = {
//     books: [],

//     addBook(title, author, year, bookIsRead){
// if(bookIsRead){
//     this.books.push({ title, author, year, isRead: bookIsRead });
//     console.log(`Book ${title} successfully added.`);
// }
//     },

//     markAsRead(title) {
//         const book = this.books.find(book => book.title === title);
//         if (book) {
//             book.isRead = true;
//             console.log(`Book "${title}" marked as read.`);
//         } else {
//             console.log(`Book "${title}" not found in the list.`);
//         }
//     },

//     listReadBooks() {
//         const readBooks = this.books.filter(book => book.isRead);
//         if (readBooks.length === 0) {
//             console.log("No books have been read yet.");
//         } else {
//             console.log("Read books:");
//             readBooks.forEach(book =>
//                 console.log(`Book: "${book.title}", Author: ${book.author}, Year: ${book.year}`)
//             );
//         }
//     },
// }
// listOfBooks.addBook("50 Shades Of Gray", "E. L. James", 1990, true);
// listOfBooks.addBook("Katerina", "Taras Shevchenko", 1820, true);
// listOfBooks.addBook("Mavka", "Lesia Ukrayinka", 1900, true);

// listOfBooks.listReadBooks();

// listOfBooks.markAsRead("Katerina");

// listOfBooks.listReadBooks();
// Ігровий персонаж: Створіть об'єкт, який представляє ігрового персонажа. Додайте властивості, такі як ім'я, рівень, здоров'я, атака тощо. Реалізуйте методи для атаки інших персонажів та відновлення здоров'я.

// Список контактів: Створіть програму для управління списком контактів. Кожен контакт буде об'єктом з властивостями ім'я, телефон, email тощо. Додайте методи для додавання, видалення та пошуку контактів.
const contactList ={
    contacts:[],
    addContact(name, phone, email){},
    deleteContact(){},
    findCOntact(){},
}




// Календар подій: Створіть календар подій, де кожна подія буде об'єктом з властивостями назва, дата, місце та повідомлення. Додайте методи для додавання події, видалення події та перегляду подій на певну дату.

// Онлайн-магазин: Створіть онлайн-магазин з можливістю додавання товарів у кошик та оформлення замовлення. Кожен товар буде об'єктом з властивостями назва, ціна, наявність тощо. Реалізуйте методи для додавання товару у кошик, підрахунку загальної вартості та оформлення замовлення.


// Пошук інформації: Створіть програму, яка дозволить шукати інформацію в тексті. Ви створюєте об'єкт зі збереженими текстовими даними та методами для пошуку заданого слова або фрази у тексті.
// const findInfo = {
//     text: '',
//     findText(word) {
//         if (this.text.toLowerCase().includes(word.toLowerCase())) {
//             console.log(`This text includes "${word}".`);
//         } else {
//             console.log(`This text does not include "${word}".`);
//         }
//     },
//     setText(newText) {
//         this.text = newText;
//     }
// };
// findInfo.setText('The recipy of kambucha is super easy');
// findInfo.findText('Kambucha'); 
// findInfo.findText('coffee');   

// Банківський рахунок: Створіть об'єкт account, який міститиме інформацію про банківський рахунок користувача, таку як ім'я, баланс та історія транзакцій. Додайте методи для додавання та витрати коштів, а також для виведення історії транзакцій.



// Напишіть ф-цію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Ф-ція вважає та повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];
// const calcTotalPrice = (stones, stoneName) => {
//     for (const stone of stones) {
//       if (stone.name === stoneName) {
//         return stone.price * stone.quantity; 
//       }
//     }
//     return 0; 
//   };
// console.log(calcTotalPrice(stones, 'Смарагд')); 
// console.log(calcTotalPrice(stones, 'Діамант')); 
// console.log(calcTotalPrice(stones, 'Щебінь'));  
// console.log(calcTotalPrice(stones, 'Рубін')); 
// Напиши скрипт управління особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
/*
 * Типів транзацький лише два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Кожна транзакція це об'єкт із властивостями: id, type та amount
   */
  
  const account = {
    // Поточний баланс рахунку
    balance: 0,
  
    // Історія транзакцій
    transactions: [],
  
    /*
     * Метод створює та повертає об'єкт транзакції.
     * Приймає суму та тип транзакції.
     */
    createTransaction(amount, type) {},
  
    /*
     * Метод, що відповідає за додавання суми до балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій
     */
    deposit(amount) {},
  
    /*
     * Метод, що відповідає за зняття суми з балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * Після чого додає його в історію транзакцій.
     *
     * Якщо amount більше ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливе, недостатньо коштів.
     */
    withdraw(amount) {},
  
    /*
     * Метод повертає поточний баланс
     */
    getBalance() {},
  
    /*
     * Метод шукає та повертає об'єкт транзації по id
     */
    getTransactionDetails(id) {},
  
    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {},
  };