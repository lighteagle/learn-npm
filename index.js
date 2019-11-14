const figlet = require("figlet");
const chalk = require("chalk");
console.log(
  chalk.blueBright.bgWhiteBright.bold(
    figlet.textSync("Hallo!", {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default"
    })
  )
);

console.log(
  chalk.black.bgWhiteBright.bold(
    figlet.textSync("Komodo !!", {
      font: "Dancing Font",
      horizontalLayout: "default",
      verticalLayout: "default"
    })
  )
);
console.log(require("yeoman-character"));
