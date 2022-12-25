 /*
        // Write a function called add7 that takes one number and returns that number + 7.

        function add7 (num) {
            return num + 7; 
        }
        console.log(add7(10))

        //Write a function called multiply that takes 2 numbers and returns their product. 

        function multiply (a, b) {
            return a * b;
        }
        console.log(multiply(7,8))

        // Write a function called capitalize that takes a string and returns
        //that string with only the first letter capitalized. Make sure that it can take strings that are lowercase,UPPERCASE or BoTh.

        function capitalize (word) {
            let capitalLetter = word.substr(0,1).toUpperCase() 
            let restOfWord = word.substr(1, 30).toLowerCase()
            return capitalLetter + restOfWord;
        }
            console.log(capitalize("BoBIs"))
            console.log
            
        // Write a function called lastLetter that takes a string and returns the very last letter of that string: 

        function lastLetter (word) {
            let veryLastLetter = word.length-1 // word.length is length of whole word, so lenght-1 simply means last character of given word
            return word.charAt(veryLastLetter)

        }
        console.log(lastLetter("bobis"))

        let answer = parseInt(prompt("Please enter number you would like to FizzBuzz up to"));

        console.log(answer)

        for (let i = 1; i <= answer; i++) {
          if  (i % 3 === 0 && i % 5 === 0 ) {
            console.log("Fizz Buzz")
        } else if (i % 3 === 0 )  {
            console.log ("Fizz")
            } else if (i % 5 === 0 ) {
                console.log("Buzz")
        } else { 
            console.log(i)
        } 
        
        //Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.

        function FirstFactorial(num) { 

        if (num === 0) {
        return 1;
        }

        return num * FirstFactorial(num-1);  

        }

        console.log(FirstFactorial(4))

        */