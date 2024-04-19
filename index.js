import inquirer from "inquirer";
import chalk from "chalk";
const currencies = {
    USD: 1,
    EUR: 0.94,
    INR: 83.61,
    PKR: 277.30,
    SR: 3.75,
    YUAN: 7.24,
    DIRHAM: 3.67,
    TAKA: 109.49
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.magenta("Please select your currency:"),
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR", "SR", "YUAN", "DIRHAM", "TAKA"]
    },
    {
        name: "to",
        message: chalk.magenta("Please select the currency to exchange from:"),
        type: "list",
        choices: ["USD", "EUR", "INR", "PKR", "SR", "YUAN", "DIRHAM", "TAKA"]
    },
    {
        name: "amount",
        message: chalk.cyanBright("Please enter your desired amount:"),
        type: "number",
    }
]);
let toCurrency = currencies[user_answer.to];
let fromCurrency = currencies[user_answer.from];
let amount1 = user_answer.amount;
let convertedAmount = (amount1 * toCurrency) / fromCurrency;
console.log(chalk.greenBright(convertedAmount));
