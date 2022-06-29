/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function() {

eval("var humanScore = 0;\nvar computerScore = 0;\ndocument.getElementById('rock').onclick = playRock;\ndocument.getElementById('paper').onclick = playPaper;\ndocument.getElementById('scissors').onclick = playScissors;\ndocument.getElementById('reset').onclick = reset;\n\nfunction playRock() {\n  play('rock');\n}\n\nfunction playPaper() {\n  play('paper');\n}\n\nfunction playScissors() {\n  play('scissors');\n}\n\nfunction play(humanChoice) {\n  var computerChoice = getComputerChoice();\n  document.getElementById('status').innerHTML = 'You chose ' + humanChoice + ', and the computer chose ' + computerChoice;\n\n  if (humanChoice === 'rock') {\n    if (computerChoice === 'rock') {\n      document.getElementById('result').innerHTML = 'YOU TIED';\n    } else if (computerChoice === 'scissors') {\n      document.getElementById('result').innerHTML = 'YOU WIN';\n      humanScore = humanScore + 1;\n    } else {\n      document.getElementById('result').innerHTML = 'YOU LOSE';\n      computerScore = computerScore + 1;\n    }\n  } else if (humanChoice === 'paper') {\n    if (computerChoice === 'paper') {\n      document.getElementById('result').innerHTML = 'YOU TIED';\n    } else if (computerChoice === 'rock') {\n      document.getElementById('result').innerHTML = 'YOU WIN';\n      humanScore = humanScore + 1;\n    } else {\n      document.getElementById('result').innerHTML = 'YOU LOSE';\n      computerScore = computerScore + 1;\n    }\n  } else if (humanChoice === 'scissors') {\n    if (computerChoice === 'scissors') {\n      document.getElementById('result').innerHTML = 'YOU TIED';\n    } else if (computerChoice === 'paper') {\n      document.getElementById('result').innerHTML = 'YOU WIN';\n      humanScore = humanScore + 1;\n    } else {\n      document.getElementById('result').innerHTML = 'YOU LOSE';\n      computerScore = computerScore + 1;\n    }\n  }\n\n  document.getElementById('humanScore').innerHTML = humanScore;\n  document.getElementById('computerScore').innerHTML = computerScore;\n}\n\nfunction getComputerChoice() {\n  var plays = ['rock', 'paper', 'scissors'];\n  var choice = plays[Math.floor(Math.random() * plays.length)];\n  return choice;\n}\n\nfunction reset() {\n  document.getElementById('status').innerHTML = '';\n  document.getElementById('result').innerHTML = '';\n  humanScore = 0;\n  computerScore = 0;\n  document.getElementById('humanScore').innerHTML = humanScore;\n  document.getElementById('computerScore').innerHTML = computerScore;\n}\n\n//# sourceURL=webpack://homework/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;