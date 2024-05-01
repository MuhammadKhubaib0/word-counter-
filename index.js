#! /usr/bin/env node
// Importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
// Displaying a colorfull welcome message
console.log(chalk.bold.redBright("\n \t\tMuhammad Khubaib - Word counter"));
console.log("=".repeat(63));
// Prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence",
    }
]);
// Trimming and splitting the sentence into words based on the "spaces"
let words = answers.sentence.trim().split(" ");
// Analysis of user input sentence
console.log("=".repeat(63));
console.log(chalk.bold.white("- sentence words:"));
console.log(words);
console.log(chalk.bold.green(`\n Word count : ${chalk.bold.greenBright(words.length)}`));
console.log("=".repeat(63));
