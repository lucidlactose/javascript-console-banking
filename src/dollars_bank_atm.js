const prompt = require("prompt-sync")({sigint: true})
const account = require("./customer_account.js")

const account_balance_check = () => {
	console.log("Balance: ", account.amount)
}
const print_transactions = () => {
	console.log("Transactions: ", account.transactions)
}
const update_PIN = () => {
	let pin = ""
	let verify_pin = "1"
	while (pin !== verify_pin) {
		pin = prompt("secure pin: 4 digit number: ")
		if (isNaN(pin) || pin.length !== 4) {
			console.log("Please use specifically only 4 numbers", pin.length, isNaN(pin))
			continue
		}

		verify_pin = prompt("verify pin: ")
		if (pin !== verify_pin) {
			console.log("Please try again")
		}
	}
	account.pin = pin
	account.transactions.push("Pin changed")
}
const withdraw = () => {
	const amount = prompt("Enter amount to withdraw ")
	if (!isNaN(amount) && amount[0] !== "-" && account.amount - Number(amount) >= 0) {
		account.amount -= Number(amount)
		console.log("Success! Your new balance is ", account.amount)
		account.transactions.push(`Withdrawn: ${amount}`)
	}
	else {
		console.log("Amount wanting to withdraw is invalid")
	}
}
const deposit = () => {
	console.log("Enter amount to deposit : ")
	const amount = prompt("Accepted amounts are $20 bills & Personal Checks of any Amount deposit funds: format 00.00: ")

	if (!isNaN(amount) && amount[0] !== "-") {
		account.amount += Number(amount)
		console.log("Success! Your new balance is ", account.amount)
		account.transactions.push(`Deposited: ${amount}`)
	}
	else {
		console.log("Invalid amount deposited")
	}
}

const transaction = () => {
	while (true) {
		console.log("Transaction Menu:")
		console.log("Enter 1 : Account Balance Check")
		console.log("Enter 2 : Print Transactions")
		console.log("Enter 3 : Update PIN")
		console.log("Enter 4 : Withdraw Amount")
		console.log("Enter 5 : Deposit Amount")

		const choice = prompt("Choice should be in 1-5 ")

		switch (choice) {
			case "1":
				account_balance_check()
				break
			case "2":
				print_transactions()
				break
			case "3":
				update_PIN()
				break
			case "4":
				withdraw()
				break
			case "5":
				deposit()
				break
			default:
				console.log("Invalid Option")
		}

		const val = prompt("Perform another Transaction? (y or n) ")
		if (val !== "y" ) {
			break
		}
	}
}

module.exports = { transaction, update_PIN }

