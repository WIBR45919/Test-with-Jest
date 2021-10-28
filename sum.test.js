import {
    divisionNumber, matchNumber, getDayBeforeChristMast, multiplicationAndDivision, findString, extractAtIndex,
    deleteProperty,filterArray,volumeCylinder,createClock,checkIfLower,add
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
    test('if there is not the same values in twice array', ()=>{
        expect(filterArray(['I am here', 'Why you are not here', 'Go ahead', 'Shutting down'], ['GoGo ahead', 'Shutting down fast']))
            .toEqual(['I am here', 'Why you are not here', 'Go ahead', 'Shutting down'])
    })

})
describe('program to extract out the values at the specified indexes from a specified array.', ()=>{
    const arrayExtractValue = ['Bonjour', 15, 17, 'Tonton', 'Je mange', 'Eat fast', 'I am here to learn more', 'as well as'];
    test('Index exist in an array',()=>{
        expect(extractAtIndex(arrayExtractValue,1,4,5)).toEqual(["Bonjour", "Tonton", "Je mange"])
    })
    test('Index does not exist',()=>{
        expect(extractAtIndex(arrayExtractValue,1)).toEqual('Bonjour')
    })

})
describe('program to delete the rollno property from the following object.Also print the object before or after deleting the property.', ()=>{
    const student = { name : "David Rayn", sclass : "VI", rollno : 12 }
    test('Property has been call', ()=>{
        console.log = jest.fn()
        deleteProperty(student, 'rollno')
        expect(console.log).toHaveBeenCalledTimes(2)
        expect(console.log).toHaveBeenNthCalledWith(1,student)
        expect(console.log).toHaveBeenNthCalledWith(2,{ name : "David Rayn", sclass : "VI" })
    })
})
describe('program to get the volume of a Cylinder with four decimal places using object classes', ()=>{
    test('Get with two positive and whole number',()=>{
        expect(volumeCylinder({radius: 2,height:5})).toBe("62.8319")
    })
    test('Get with 0,0 likes parameters',()=>{
        expect(volumeCylinder({radius: 0,height:0})).toBe(0)
    })
})
describe('Write a JavaScript program to create a Clock.', ()=>{
    jest.useFakeTimers();
    jest.spyOn(global, 'setInterval');

    test('show time every 1000ms', () => {
        createClock();
        expect(setInterval).toHaveBeenCalledTimes(1);
        expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    });
})
describe('Write a JavaScript program to check if a string is lower case or not.',  ()=> {
    test('message is lower case',()=>{
        expect(checkIfLower('bonjour')).toMatch('This string is lower case')
    })
    test('message is not in lower case',()=>{
        expect(checkIfLower('Bonjour')).toMatch('This string is not lower case')
        expect(checkIfLower('BonJour')).toMatch('This string is not lower case')
        expect(checkIfLower('bonJour')).toMatch('This string is not lower case')
        expect(checkIfLower('BONJOUR')).toMatch('This string is not lower case')
    })

});
describe('Write a function called add with two parameters which return a promise containing the result or the error message',()=>{
    test('add is called without parameters',async ()=>{
        try {
            await add()
        }catch (e) {
            expect(e).toMatch('Error: Must provide two parameters')
        }
    })
     test('add is called with one parameter',async ()=>{
         try {
             await add(4)
         }catch (e) {
             expect(e).toMatch('Error: Must provide two parameters')
         }
    })
     test('add is called with two parameters',async ()=>{
             const data = await add(3,2)
             expect(data).toMatch('Success: You provided two parameters')
     })

})
