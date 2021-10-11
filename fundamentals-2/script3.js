const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    job: 'teacher',
    birthYeah : 1991,
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },
    getSummary: function (){
        return (`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`)
    }
};

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(jonas.firstName + ' has ' + jonas.friends.length + ' friends, and his best friend is called ' + jonas.friends[0]);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
    fullName : "Mark Miller",
    mass : 78,
    height : 1.69,
    calcBMI : function (){
        return this.mass / (this.height ** 2)
    }
};

const john = {
    fullName : "John Smith",
    mass : 92,
    height : 1.95,
    calcBMI : function (){
        return this.mass / (this.height ** 2)
    }
};

if (mark.calcBMI() > john.calcBMI()){
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()})is higher than ${john.fullName}'s (${john.calcBMI()}).`)
}else if (mark.calcBMI() < john.calcBMI()){
    console.log(`${john.fullName}'s BMI (${john.calcBMI()})is higher than ${mark.fullName}'s (${mark.calcBMI()}).`)
}else{
    console.log("Both have the same BMI's!")
}
