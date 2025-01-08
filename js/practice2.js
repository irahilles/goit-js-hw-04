//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
function findSmallerNumber (numbers){
    if(!Array.isArray(numbers)){
      return `Wrong type data`;
    }
    // console.log(Array.isArray(numbers));
    let smallerNumber = numbers[0];
    for (const number of numbers){
        if(number<smallerNumber){
            smallerNumber = number;
        }  
    }
    return smallerNumber;
}
console.log(findSmallerNumber(numbers));
console.log(Math.min(...numbers));
