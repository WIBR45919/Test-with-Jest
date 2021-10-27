import {
    divisionNumber, matchNumber, getDayBeforeChristMast, multiplicationAndDivision, findString, extractAtIndex,
    deleteProperty,filterArray,volumeCylinder
} from "./index.js";


describe('division operation', () => {

  test('division  -6 / -2 equal to 3', () => {
    expect(divisionNumber(-6, -2)).toBe(3);
  })

  test('division  -6 / 2 equal to -3', () => {
    expect(divisionNumber(-6, 2)).toBe(-3);
  })

  test('division  6 / 2 equal to 3', () => {
    expect(divisionNumber(6, 2)).toBe(3);
  })

  test('division  -6 / 0 equal to 0', () => {
    expect(divisionNumber(-6, 0)).toBe(0);
  })

  test('division  0 / -2 equal to 0', () => {
    expect(divisionNumber(0, -2)).toBe(0);
  })

  test('division  2 / Infinity equal to 0', () => {
    expect(divisionNumber(2, Infinity)).toBe(0);
  })

  test('division Infinity / 2 equal to 0', () => {
    expect(divisionNumber(Infinity, 2)).toBe(0);
  })

})
describe('check if user input equal to random number', () => {
  test("check if guess number and random number are equals", () => {
    Math.random = jest.fn(() => 0.3);
    expect(matchNumber(3)).toBe("Good Work");
  });
})
describe('calculate days left until next Christmas', () => {
  test("to day until christmas", () => {
    Date.now = jest.fn(() => 1635247234197)
    expect(getDayBeforeChristMast()).toBe(60);
  });
})
describe('calculate multiplication and division of two numbers (input from user)', () => {
  test('between two positives numbers', ()=>{
    expect(multiplicationAndDivision(5, 4)).toEqual({ addition: 9, multiplication: 20 })
  })
   test('between one negative and one positive number', ()=>{
    expect(multiplicationAndDivision(-5, 4)).toEqual({ addition: -1, multiplication: -20 })
  })
   test('if the first number is 0 and second 4', ()=>{
    expect(multiplicationAndDivision(0, 4)).toEqual({ addition: 4, multiplication: 0 })
  })
   test('if the two numbers are 0', ()=>{
    expect(multiplicationAndDivision(0, 0)).toEqual(0)
  })
   test('if the second number is 0', ()=>{
    expect(multiplicationAndDivision(5, 0)).toEqual(0)
  })
})
describe('program to find the longest string from a given array',()=>{
    test('Render the longest string',()=> {
        expect(findString(['I am here', 'Why you are not here', 'Go ahead', 'Shutting down'])).toMatch('Why you are not here')
    })

    test('Render if array has one string',()=> {
        expect(findString(['I am here'])).toMatch('I am here')
    })
    test('Render if array is empty',()=> {
        expect(findString([])).toMatch('Empty array')
    })

})
describe('program to filter out the specified values from a specified array. Return the original array without the filtered values', ()=>{
    test('value return', ()=>{
        expect(filterArray(['I am here', 'Why you are not here', 'Go ahead', 'Shutting down'], ['Go ahead', 'Shutting down']))
            .toEqual(['I am here', 'Why you are not here'])
    })
})
describe('program to extract out the values at the specified indexes from a specified array.', ()=>{
    test('Index exist in an array',()=>{
        expect(extractAtIndex(1,4,5)).toEqual([15, 17,'Tonton', 'Eat fast', 'as well as'])
    })
})
describe('program to delete the rollno property from the following object.Also print the object before or after deleting the property.', ()=>{
    test('Print is true', ()=>{
        expect(deleteProperty()).toEqual(console.log({ name : "David Rayn", sclass : "VI", rollno : 12 }))
        expect(deleteProperty()).toEqual(console.log({ name : "David Rayn", sclass : "VI" }))
    })
})
describe('program to get the volume of a Cylinder with four decimal places using object classes', ()=>{
    test('Get with two positive and whole number',()=>{
        expect(volumeCylinder(2,5).get()).toBe("62.8319")
    })
    test('Get with 0,0 likes parameters',()=>{
        expect(volumeCylinder(0,0).get()).toBe(0)
    })
})