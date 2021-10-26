 export function sum(a, b) {
    return a + b;
  }
  // module.s = sum;
// 1- Write a JavaScript program where the program takes a random integer between 1 to 10,
// the user is then prompted to input a guess number. If the user input matches with guess number,
//  the program will display a message "Good Work" otherwise display a message "Not matched".

 export function matchNumber(number){
  const max = 10, min = 1
  const randonNumber = Math.floor(Math.random (max - min) + min);
  return number === randonNumber ? 'Good Work' : 'Not matched';
}
 // 2. Write a JavaScript program to calculate days left until next Christmas.
export function getDayBeforeChristMast(){
  return Math.ceil((new Date(2021, 11, 25) - Date.now()) / (24*3600*1000));
}
 // 3.Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
export function multiplicationAndDivision(a= 1,b= 1){
    if ((a === 0 & b === 0) || b === 0) return  0
    else return { addition: a+b, multiplication: a*b }
}
 //4. Write a JavaScript program to find the longest string from a given array.
export function findString(stringArray){
    const string = stringArray.reduce((prev, acc) => {
        if(acc.length > prev.length){
            return acc
        }
        return prev
    })
    return string
}
 //9. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without the filtered values
export function filterArray(tabValues, arrayFilterValues){
    return tabValues.filter(elt => !arrayFilterValues.includes(elt))
}
 //10.Write a JavaScript program to extract out the values at the specified indexes from a specified array.
export function extractAtIndex(...index){
    const arrayExtractValue = ['Bonjour', 15, 17, 'Tonton', 'Je mange', 'Eat fast', 'I am here to learn more', 'as well as'];
    const length = arrayExtractValue.length
    index.forEach((elt) => {
        if(elt < length) arrayExtractValue.splice(elt-1,1)
    })
    return arrayExtractValue
}
 export function additionNumber(a, b){
  return a+b;
}
 export function multiplierNumber(a, b){
  return a*b;
}

 export function divisionNumber(a, b){
  if(b === 0) return 0
  else if (b === Infinity || a === Infinity) return 0 
  else return parseInt(a/b);
}
