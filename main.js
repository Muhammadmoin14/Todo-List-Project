#! usr/env/bin node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.blue("\t Welcome To Our TODO List \t"));
let todo = [];
let condition = true;
while (condition == true) {
    let add = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.italic.magenta("Enter Your Task")
        },
        {
            name: "priority",
            type: "confirm",
            message: chalk.italic.magenta("Are You want to add more todo list "),
            default: "false"
        }
    ]);
    todo.push(add.task);
    condition = add.priority;
    console.log(chalk.green("Your Todo list is "), chalk.red(todo));
}
console.log(chalk.bold.blue("\n\t Thanks For Your Time Regards M.Moin \t"));
