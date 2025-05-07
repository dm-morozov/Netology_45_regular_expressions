const str = "one, two, three";
re = /\w+/g;
arr = str.match(re);
console.log(arr);

function validate(string) {
    re = /\w+/;
    return string.match(re);
}
console.log(validate("Ok Google!"));

function date(string) {
    // re = /(\d{2})\.(\d{2})\.(\d{4})/;
    re = /\d\d\.\d\d\.\d\d\d\d/;
    return string.match(re);
}

birthday = date('10.03.1991');
// birthday.shift();
console.log(birthday);
// console.log(birthday.join('.'));

const html = '<div>Лучник: health=100</div>';
const regex = /<div>(.*)<\/div>/; // Работает
console.log(html.match(regex)[1]); // Лучник: health=100

function isValidImage(file) {
    return /\.jpe?g$/.test(file);
}
console.log(isValidImage("avatar.jpg")); // true
console.log(isValidImage("avatar.jpeg")); // true
console.log(isValidImage("avatar.png")); // false
