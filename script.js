// let and const


// ES5
var name5 = 'Jane Smith'
var age5 = 23
name5 = 'Jane Miller'
console.log(name5)

// ES6
const name6 = 'Jane Smith'
let age6 = 23
name6 = 'Jane Miller'
console.log(name6) // error

// ES5
function driversLicence5(passedTest) {
    if (passedTest) {
        console.log(firstName) // undefined
        var firstName = 'John'
        var yearOfBirth = 1900
        // console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.' )
    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.' )
}

driversLicence5(true)


// ES6
function driversLicence6(passedTest) {
    // console.log(firstName)  // not defined
    let firstName
    const yearOfBirth = 1900
    if (passedTest) {
        // let firstName = 'John'
        // const yearOfBirth = 1900
        firstName = 'John'
        // yearOfBirth = 1900
        // console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.' )
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.' )  // error
}

driversLicence6(true)


let i = 23
for (let i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i) // 23


//***********************************************//
// Blocks and IIFEs

// ES6
{
    const a = 1
    let b = 2
    var c = 3
}

console.log(a + b)  // error: not defined
console.log(c)

// ES5
(function () {
    var c = 3
})()

console.log(c)




//***********************************************//
// Strings


let firstName = 'john'
let lastName = 'Smith'
const yearOfBirth = 1990

function calcAge(year) {
    return 2016 - year
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is' + calcAge(yearOfBirth) + 'years old.')

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old. `)


const n = `${firstName} ${lastName}`
n.startsWith('J')
n.endsWith('Sm')
n.includes('oh')
`${firstName} `.repeat(5)

//***********************************************//
// Arrow Functions
const years = [1990, 1965, 1982, 1937]

// ES5
var ages5 = years.map(function (el){
    return 2016 -el
})  

console.log(ages5)

//ES6
var ages6 = years.map(el => 2016 - el)
console.log(ages6)


ages6 = years.map((el, index) => `Age element ${index+1}: ${2016 - el}`)
console.log(ages6)

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear()
    const age = now - el
    return `Age element ${index+1}: ${age}`
})
console.log(ages6)

// Lexical 'this'
// ES5 
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str) 
        })
    }
}
// box5.clickMe()

// ES6 
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str) 
        })
    }
}
// box6.clickMe()

const box6 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str) 
        })
    }
}
box6.clickMe() // this point to the window object


function  Person(name) {
    this.name = name
}

// ES5
Person.prototype.myFriends5 = function (friends) {
    var arr = friends.map(function (el) {
        return this.name + ' is friends with ' + el
    }.bind(this))
    console.log(arr)
}

var friends = [ 'Bob', 'Jane', 'Mark']
new Person('John').myFriends5(friends)


// ES6
Person.prototype.myFriends6 = function (friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}`)
    console.log(arr)
}

var friends = [ 'Bob', 'Jane', 'Mark']
new Person('John').myFriends6(friends)


// Destructuring

// ES5
var john = ['John', 26]
var name = john[0]
var age = john[26]

// ES6
const [name, age] = john


const obj = {
    firstName: 'John',
    lastName: 'Smith'
}

const { firstName, lastName } = obj


const {firstName: a, lastName: b} = obj
console.log(a)
console.log(b)

function calcAgeRetirement(year) {
    const age  = new Date().getFullYear - year
    return [age, 65 - age]
}

const [age, retirement] = calcAgeRetirement(1990)
console.log(age)
console.log(retirement)

