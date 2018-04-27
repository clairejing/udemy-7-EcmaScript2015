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