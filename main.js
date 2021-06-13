// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
console.log("------------- Задание 1 -------------");

function numberToObject(number) {
    const objNumbers = {};
    numString = String(number);
    if (numString.length === 3) {
        objNumbers['единицы'] = Number(numString[2]);
        objNumbers['десятки'] = Number(numString[1]);
        objNumbers['сотни'] = Number(numString[0]);
    } else {
        console.log('Введите число с 3 цифрами');
    }
    return objNumbers;
}

num = parseInt(prompt('Введите число с 3 цифрами'))

console.log(numberToObject(num));

/*
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/
console.log("------------- Задание 2 -------------");

let basket = {
    'apple': 50,
    'pineapple': 70,
    'pear': 55
}

function countBasketPrice() {
    let price = 0;
    for (let i in basket) {
        price += basket[i];
    }
    return price;
}

console.log(countBasketPrice());
