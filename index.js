 export function sum(a, b) {
    return a + b;
  }
  // module.s = sum;
// 1- Write a JavaScript program where the program takes a random integer between 1 to 10,
// the user is then prompted to input a guess number. If the user input matches with guess number,
//  the program will display a message "Good Work" otherwise display a message "Not matched".

export function matchNumber(number){
  const max = 10, min = 1
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return number === randomNumber ? 'Good Work' : 'Not matched';
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
    if(stringArray.length === 0) return "Empty array"
    else if (stringArray.length === 1) return stringArray[0]
    return stringArray.reduce((prev, acc)=>  acc.length > prev.length ? acc : prev)
}
 //9. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without the filtered values
export function filterArray(tabValues, arrayFilterValues){
    return tabValues.filter(elt => !arrayFilterValues.includes(elt))
}
 //10.Write a JavaScript program to extract out the values at the specified indexes from a specified array.
export function extractAtIndex(arrayExtractValue,...index){
    if (index.length === 1) return arrayExtractValue[index[0] - 1]
    else {
        const extractValues = []
        index.forEach((elt) => {
           extractValues.push(arrayExtractValue[elt-1])
        })
        return extractValues
    }
}

 //11. Write a JavaScript program to delete the rollno property from the following object.
 // Also print the object before or after deleting the property.
export function deleteProperty(arrayOrigin, prop){
    console.log(arrayOrigin)
    delete arrayOrigin[prop]
    console.log(arrayOrigin)
}
//12. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
export function volumeCylinder(rayon = 1, height= 1){
     return {
        get: function (){
            if (rayon === 0 || height === 0) return 0
            else return (2 * Math.PI * rayon * height).toFixed(4)
        }
    }
}
 //13. Write a JavaScript program to create a Clock.
export function createClock(){
    setInterval(()=>{
        return `${ new Date().getHours() } : ${ new Date().getMinutes() } :${ new Date().getSeconds() }`
    },1000)
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
