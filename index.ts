
import inquirer from "inquirer";

const answer = await inquirer.prompt ([
{message: "Enter first number", type: "number", name: "firstnumber"},
{message: "Enter second number", type: "number", name: "secondnumber"},
{
  message: "select one of the operators to perform operation",
  type: "list",
  name: "operator",
  choices: ["Addition","subtraction","multiplication","Division"],

},
]);

// condition statement
if(answer.operator ==="Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}else if(answer.operator ==="subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}else if(answer.operator ==="multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}else if(answer.operator ==="Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}else{
    console.log("please select invalid operators")
}

