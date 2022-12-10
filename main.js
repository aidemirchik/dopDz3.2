// const arr = [-8, 4, -6, -1, 7, 9, 2, 4, -5, 1, -7, -9, 2, 5, 3];
 
// const maxValueIndex = arr.indexOf(Math.max(...arr));
// const minValueIndex = arr.indexOf(Math.min(...arr));
// const average = arr.reduce((a, b) => a + b, 0) / arr.length;
// console.log(`Индекс минимального значения: ${minValueIndex}`);
// console.log(`Индекс максимального значения значения: ${maxValueIndex}`);
// console.log(`Среднее арифмитическое: ${average}`);

// program massiv;
// var
// x:array[1..5] of integer;
// i:byte; sum:integer;
// sa:real;
 
// begin
// sum:=0;
// for i:=1 to 5 do
// begin
// writeln('Введите ',i,'й элемент массива:');
// readln(x[i]);
// sum:=sum+x[i];
// end;
// sa:=sum/5;
// writeln('Среднее арифметическое - ',sa:6:2);
// writeln('Выводим массив в строку и через запятую:');
 
// for i:=1 to 5 do 
// if i<=4 then write(x[i],', ')
// else write(x[i],'.');
// end.

// function average(nums) {
//     return nums.reduce((a, b) => (a + b)) / nums.length;
// }

// let popularitySum = 0;
// let itemsFound = 0;
// const len = victorianSlang.length;
// let item = null;
// for (let i = 0; i < len; i++) {
//     item = victorianSlang[i];
//     if (item.found) {
//         popularitySum = item.popularity + popularitySum;
//         itemsFound = itemsFound + 1;
    
// }}
// const averagePopularity = popularitySum / itemsFound;
// console.log("Average popularity:", averagePopularity);

// const data = [
//     {name: "Ann", age: 24},
//     {name: "Bred", age: 27},
//     {name: "Grace", age: 21},
//     {name: "Alex", age: 30},
//     {name: "Robby", age: 25}
//   ]

// function calcAvgAge(array) {
//     let sum = 0
//     let cnt = 0
//     let len = array.length
//     for (let i = 0; i < len; i++) {
//       sum += array[i].age
//       cnt += 1
//     }
//     return sum / cnt
//   }

//   const data = [
//     {name: "Ann", age: 24},
//     {name: "Bred", age: 27},
//     {name: "Grace", age: 21},
//     {name: "Alex", age: 30},
//     {name: "Robby", age: 25}
//   ];
  
//   let avg = data.reduce((r,i) => r + i.age, 0) / (data.length || 1);
//   console.log(avg);

// function avg(arr) {
//     var i = 0, sum = 0, arrayAvg = arr.length;
//     while (i < arrayAvg) {
//         sum = sum + arr[i++];
// }
//     return sum / arrayAvg;
// }
// var arr = [1, 5, 2, 3, 7];
// var a = avg(arr);
// console.log(a)

// const num = [5,4,4,4,5,5,3,4,5,5,2,5,4,5,5]
// num.avg()

// let num = [5,4,4,4,5,5,3,4,5,5,2,5,4,5,5]
// function avg()
// var num = [5,4,4,4,5,5,3,4,5,5,2,5,4,5,5].avg();

function average(num) {
    return num.reduce((a, b) => (a + b)) / num.length;
}
var num = [5,4,4,4,5,5,3,4,5,5,2,5,4,5,5];
var a = average(num);
console.log(a);
