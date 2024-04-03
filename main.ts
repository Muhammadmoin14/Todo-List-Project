#! usr/env/bin node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.blue("\t Welcome To Our TODO List \t"));

let todo = [""];
let condition = true;
while (condition = true){
    // let todo = [""];
    let q1 = await inquirer.prompt([{
    name:"opton",
    type: "list",
    message: chalk.italic.magenta("Select Your Option"),
    choices:["Add Task","View Task","Delete Task","Exit"]

}])
if(q1.opton=="Add Task"){
    
    while( condition==true)
    {
        let add = await inquirer.prompt(
    [
        {
            name:"task",
            type:"string",
            message:chalk.italic.magenta("Enter Your Task")
        },      
        {
            name:"priority",
            type:"confirm",
            message:chalk.italic.magenta("Are You want to add more todo list "),
            default:"false"
        }
    ]
)
    todo.push(add.task)
    condition = add.priority

    console.log(chalk.green("Your Todo list is "),chalk.red(todo));
    
    }
}
else if(q1.opton=="View Task"){
    console.log(chalk.green("Your Todo list is "), chalk.red(todo));
}
else if(q1.opton=="Delete Task"){   
    let index =await  inquirer.prompt({
        name:"index",
        type:"number",
        message:chalk.italic.yellow("Enter the task number you Want To Delete ")
    })
    
    todo.splice(index.index - 1, 1);
    console.log(chalk.yellow("The task has been deleted"))
    console.log(chalk.green("Your Todo list is now ",chalk.red(todo)))
}
else if(q1.opton=="Exit"){
    condition = false;
    break;
}
}
console.log(chalk.bold.blue("\n\t Thanks For Your Time Regards M.Moin \t" ))
