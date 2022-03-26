// 1. Дан код:
console.log("1 задание");

var a = 1,
  b = 1,
  c,
  d;
c = ++a;
alert(c); // 2. К переменной a мы прибавляем один и поэтому c = 2
d = b++;
alert(d); // 1. Т.к. в JS i++ возвращает значение i до приращения
c = 2 + ++a;
alert(c); // 5. К переменной a мы уже прибавляли 1 и сейчас добавляем ещё 1
d = 2 + b++;
alert(d); // 4.
alert(a); // 3. К переменной а мы прибавили 1 три раза
alert(b); // 3. Такаяже история как и с перемнной a
// У меня IDE так переформатировала при сохранении.

// 2. Чему будет равен x в примере ниже?
console.log("2 задание");

var a = 2;
var x = 1 + (a *= 2);
console.log(x); // 5

/* 3. Объявить две целочисленные
переменные a и b и задать им
произвольные начальные значения.
Затем написать скрипт, который работает
по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму;
ноль можно считать положительным числом.
*/
console.log("3 задание");

let a3 = -1;
let b3 = -3;

if ((a3 >= null) & (b3 >= null)) {
  console.log(a3 - b3);
} else if ((a3 < null) & (b3 < null)) {
  console.log(a3 * b3);
} else {
  console.log(a3 + b3);
}

/* 4. Присвоить переменной а
значение в промежутке [0..15].
С помощью оператора switch
организовать вывод чисел от
a до 15. */
console.log("4 задание");

function numbersDance(a) {
  switch (a) {
    case 0:
      return "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15";
    case 1:
      return "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15";
    case 2:
      return "2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15";
    case 3:
      return "3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15";
    case 4:
      return "4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15";
    case 5:
      return "5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15";
    case 6:
      return "6, 7, 8, 9, 10, 11, 12, 13, 14, 15";
    case 7:
      return "7, 8, 9, 10, 11, 12, 13, 14, 15";
    case 8:
      return "8, 9, 10, 11, 12, 13, 14, 15";
    case 9:
      return "9, 10, 11, 12, 13, 14, 15";
    case 10:
      return "10, 11, 12, 13, 14, 15";
    case 11:
      return "11, 12, 13, 14, 15";
    case 12:
      return "12, 13, 14, 15";
    case 13:
      return "13, 14, 15";
    case 14:
      return "14, 15";
    case 15:
      return "15";
    default:
      return "Неизвестное число";
  }
}

console.log(numbersDance(0));

/* 5. Реализовать основные 4
арифметические операции в виде
функций с двумя параметрами.
Обязательно использовать оператор
return. */
console.log("5 задание");

function fourOperations(num1, num2) {
  let plus = num1 + num2;
  let minus = num1 - num2;
  let multiplication = num1 * num2;
  let division = num1 / num2;
  return `	Сложение - ${plus},
	Вычитание - ${minus},
	Умножение - ${multiplication},
	Деление - ${division}`;
}

console.log(fourOperations(6, 3));

/* 6. Реализовать функцию с
тремя параметрами: function
mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов,
operation – строка с названием
операции. В зависимости от
переданного значения операции
выполнить одну из арифметических
операций (использовать функции из
пункта 5) и вернуть полученное
значение (использовать switch). */
console.log("6 задние");

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "сложение":
      return arg1 + arg2;
    case "вычитание":
      return arg1 - arg2;
    case "умножение":
      return arg1 * arg2;
    case "деление":
      return arg1 / arg2;
    default:
      return "Неизвестная операция";
  }
}

console.log(mathOperation(74, 48, "сложение"));
