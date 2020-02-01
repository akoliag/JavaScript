//coding challenge 2:
// BMI comparison:
// 1.  create 2 objects with properties for their full name, mass, and height,
// 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
// 3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. 

let john = {
    fullName: 'John Smith',
    mass: 86,
    height: 1.83,
    bmiCalc: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

let mark = {
    fullName: 'Mark Doe',
    mass: 78,
    height: 1.78,
    bmiCalc: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}


if (john.bmiCalc() > mark.bmiCalc()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmiCalc() > john.bmiCalc()) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}