 let a1 = 10; 
 let b1 = 3;
 
console.log("Остаток от деления 10 / 3 = " + a1 % b1)
let a2 = 2; 
let b2 = 10;
let st = a2**b2;
console.log("2 в 10 степени = " + st)
let a3 = 1; 
let b3 = 2;
let c3 = " белых медведей"
console.log(a3 + (b3 + c3))

let a4 = 5;
let b4 = 10; 
let c4 = ++a4 + --b4;
console.log("либо ++a поменять на a++ либо b-- поменять на --bL: "+ c4);

const x = 15 * (4 + (25 - 55));
console.log(x);

let height = 23;
let width = 10;
let s = "Площадь прямоугльник  = "+ height * width + "см";
console.log(s);

let p = 3.14; 
let heightC = 10;
let Dc = 4;
let v = p * (Dc**2) * heightC;
console.log("Обьем цилиндра = "+v); 

let sum = 1000000; 
let procent =10; 
let years = 5; 
let month = years * 12;
let procent_month = procent / 12 / 100;  
let koficient = procent_month * ((1 + procent_month)**month) / (((1 + procent_month)**month) - 1);
let pay_month = sum * koficient;
console.log("-----------------------------------")
console.log(" Сумма займа 1 000 000 Самалийских шиллингов \n процентная ставка 10% \n срок 5 лет (60 месяцев) или (1 826 дней)");
console.log("Переплата по кредиту = " + Math.floor((month * pay_month) - sum)+" Самалийских шиллингов");



