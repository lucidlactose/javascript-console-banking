const prompt = require('prompt-sync')({sigint: true})
const transaction = require("./src/dollars_bank_atm.js").transaction
const open_account = require("./src/application_views.js").open_account

while (true) {
	console.log("DOLLARSBANK ATM Welcomes You!!");
	const choice = prompt("Enter a valid choice (1 > Transaction 2 > Open New Account) ")
	switch (choice) {
		case "1":
			transaction()
			break
		case "2":
			open_account()
	}
}

