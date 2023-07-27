/*const num1 = Number.parseFloat(prompt("Введите первое число"));
const num2 = Number.parseFloat(prompt("Введите второе число"));

alert(`Результат сложения ${num1} и ${num2} равен ${sum(num1,num2)}`);

function sum(a,b) {
    return (a+b).toFixed(1);
}*/

/*
if (confirm("Вам хорошо живется?")) {
    alert("Тогда мы идем к нам!");
} else {
    alert("Ну, вы держитесь там!");
}
*/

/*
switch (prompt("Введите продукт").toLowerCase()) {
    case "мандарины":
        alert("Мандарины стоят 100 руб/кг");
        break;
    case "бананы":
    case "груши":
        alert("Бананы и груши стоят 70 руб/кг");
        break;
    default:
        alert("Нет такого продукта!");
}
*/
/*
function getMaxEvenElement(arr) {
    let max = arr[0];
    for (let i = 2; i < arr.length; i += 2) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0]));
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50]));
*/
/*
function getArr(num) {
    let arr = [];

    for (let i = num-num%3; i >= 0; i--) {
        if (i % 3 == 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(getArr(15));
console.log(getArr(17));
console.log(getArr(22));
*/
/*
function f(clockArr, money) {
    for (let i = 0; i < clockArr.length - 1; i++) {
        for (let j = i + 1; j < clockArr.length; j++) {
            if (+(clockArr[i] + clockArr[j]).toFixed(2) === money) {
                return true;
            }
        }
    }
    return false;

}

console.log(f([8.74, 3.12, 9.50, 2.35], 2.35)); //false
console.log(f([1.1, 4.2, 7.5, 0.4], 8.4)); // false
console.log(f([54.10, 20.00, 18.51, 97.75, 35.20, 76.42], 89.3)); // true
*/