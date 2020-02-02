//coding challenge 3:
// a more advanced version of tip calculator:
// This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
// John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
// Implement a tip calculator using objects and loops:
// 1. Create an object with an array for the bill values
// 2. Add a method to calculate the tip
// 3. This method should include a loop to iterate over all the paid bills and do the tip calculations
// 4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). 
//HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

let person = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.totalBill = [];

        for (let i = 0; i < this.bills.length; i++) {
            let tip;
            let bill = this.bills[i];

            if (bill < 50) {
                tip = 0.2;
            } else if (bill >= 50 && bill <= 200) {
            tip = 0.15;
            } else {
            tip = 0.1
            }

            this.tips[i] = bill * tip;
            this.totalBill[i] = bill + (bill * tip);
        }

    }

}