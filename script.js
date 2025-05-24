//#1 object/prompt()

// let user = {
//   name: prompt("Введиите ваше имя:"),
//   age: prompt("Введите ваш возраст:"),
//   subject: prompt("ВВедите ваш предмет:"),
//   grade: prompt("Введите вашу оценку:"),
// };
// console.log(user);

// user.age = Number(user.age) + 5;
// console.log(user.age);

//#2 movies
// const movies = [
//   {
//     title: "Начало",
//     director: "Кристофер Нолан",
//     year: 2010,
//     genre: "фантастика",
//   },
//   {
//     title: "Форрест Гамп",
//     director: "Роберт Земекис",
//     year: 1994,
//     genre: "драма",
//   },
//   {
//     title: "Криминальное чтиво",
//     director: "Квентин Тарантино",
//     year: 1994,
//     genre: "боевик",
//   },
//   {
//     title: "Зеленая миля",
//     director: "Фрэнк Дарабонт",
//     year: 1999,
//     genre: "триллер",
//   },
//   {
//     title: "Жизнь прекрасна",
//     director: "Роберто Бениньи",
//     year: 1997,
//     genre: "комедия/драма",
//   },
// ];

// console.log(movies[1].director);
//console.log(movies[4].genre);

//#3
// const shoppingList = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];
// shoppingList.unshift("творог");
// console.log(shoppingList);

// shoppingList.pop();
// console.log(shoppingList);

// shoppingList.splice(2, 1, "апельсины", "йогурты");
// console.log(shoppingList);

//#4 Use while
// const numbers = [52, 31, 9, 85, 31, 45];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(`Сумма чисел: ${sum}`); // 253

// const numbers = [52, 31, 9, 85, 31, 45];
// let sum = 0;
// i = 0;
// while (i < numbers.length) {
//   sum += numbers[i];
//   i++;
// }

// console.log(`Сумма чисел: ${sum}`);

//#5 for(awards)
const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    numberOfPages: 281,
    genre: "Fiction",
    awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"],
  },
  {
    title: "1984",
    author: "George Orwell",
    numberOfPages: 328,
    genre: "Dystopian",
    awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"],
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    numberOfPages: 180,
    genre: "Classic",
    awards: ["Modern Library's Top 100", "National Book Award Nominee"],
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    numberOfPages: 635,
    genre: "Adventure",
    awards: ["Regarded as a Great American Novel", "Part of the Western Canon"],
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    numberOfPages: 432,
    genre: "Romance",
    awards: ["BBC's Big Read", "Guardian's 100 Best Novels"],
  },
];
for (let i = 0; i < books.length; i++) {
  console.log(
    `Название: ${books[i].title}, Автор: ${books[i].author}, Количество страниц: ${books[i].numberOfPages}, Жанр: ${books[i].genre},`
  );
  console.log("Награды:");
  for (let j = 0; j < books[i].awards.length; j++) {
    console.log(`    ${books[i].awards[j]}`);
  }
}
