const date = '2022-09-24';

const [year, month, day] = date.split('-');

const result = [month, day, year].join('/');

console.log(result); // 👉️ "09/24/2022"