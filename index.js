#! /usr/bin/env node
//                             Task 2
//2) Evaluating a number game:
//• Prompt the user to enter a number.
//• Compare the entered number with a dynamic number value.
//• Output the result indicating whether the entered number is greater than, equal to, or less 
//  than the dynamic number value.
import inquirer from "inquirer";
//Prompt user to enter a number
let userNumber = await inquirer.prompt([
    {
        name: "user_number",
        type: "number",
        message: "Enter a number :"
    }
]);
//Define a dynamic number value
let dynamicNumber = Math.floor(Math.random() * 50 + 1);
//Compare enter number with dynamic number
if (userNumber.user_number > dynamicNumber) {
    console.log(`${userNumber.user_number} is greater than ${dynamicNumber}`);
}
else if (userNumber.user_number < dynamicNumber) {
    console.log(`${userNumber.user_number} is less than ${dynamicNumber}`);
}
else {
    console.log(`${userNumber.user_number} is equal to ${dynamicNumber}`);
}
