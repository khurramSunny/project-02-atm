
// This some what complex TypeScript/Node.js project is a console-based application.
// When the system starts the user is prompted with a user id and user pin.
// After entering the details successfully, the ATM functionalities are unlocked.
// All the user data is generated randomly.

// Create a GitHub repository for the project and submit its URL in the project submission form.

//                                    ATM

import inquirer from "inquirer";

let myBalance = 0;
let isContinue = true;
const pincode = 1234; // -------------PIN CODE------------------------------------
const message = "Welcome to the ATM";
console.log(message);

let pin_ans = await inquirer.prompt({
  type: "number",
  name: "ans",
  message: "Please Enter Your Pin: ",
});

if (pin_ans.ans === 1234) {
  do {
    let ans = await inquirer.prompt({
      type: "list",
      name: "list",
      message: "Select any option",
      choices: ["Deposite", "Withdraw", "Fastcash", "Balance Check"],
    });

    // -------------------------------Deposite------------------------------------

    if (ans.list === "Deposite") {
      let ans = await inquirer.prompt({
        type: "number",
        name: "deposite_amount",
        message: "Please Enter Your Amount: ",
      });
      if (ans.deposite_amount > 0) {
        myBalance = myBalance + ans.deposite_amount;
        console.log(myBalance);
      }
    }

    // -------------------------------Withdraw------------------------------------

    if (ans.list === "Withdraw") {
      let ans = await inquirer.prompt({
        type: "number",
        name: "withdraw_amount",
        message: "Please Enter Your Amount: ",
      });
      if (ans.withdraw_amount <= myBalance) {
        myBalance = myBalance - ans.withdraw_amount;
        console.log(myBalance);
      } else {
        console.log("Insufficient Balance");
      }
    }

    // -------------------------------Fast Cash-----------------------------------

    else if (ans.list === "Fastcash") {
      let ans = await inquirer.prompt({
        type: "list",
        name: "fast_cash",
        message: "Please Select Any",
        choices: ["500", "1000", "5000"],
      });
      if (ans.fast_cash <= myBalance) {
        if (ans.fast_cash === "500") {
          myBalance -= ans.fast_cash;
          console.log(myBalance);
        } else if (ans.fast_cash === "1000") {
          myBalance -= ans.fast_cash;
          console.log(myBalance);
        } else if (ans.fast_cash === "5000") {
          myBalance -= ans.fast_cash;
          console.log(myBalance);
        }
      }
    }

    // -------------------------------Balance Check-------------------------------

    else if (ans.list === "Balance Check") {
      console.log(`Your Balance Is: ${myBalance}`);
    }

    // -------------------------------While Condition-----------------------------

    let while_ans = await inquirer.prompt({
      type: "confirm",
      name: "condition",
      message: "Do You Want To Continue?:",
    });
    if (while_ans.condition === false) {
      isContinue = false;
    }
  } while (isContinue);
} else {
  console.log("Invalid Pin Code");
}