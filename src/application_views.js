const prompt = require('prompt-sync')({sigint: true})
const update_PIN = require("./dollars_bank_atm.js").update_PIN
const account = require("./customer_account.js")

const open_account = () => {
	const init_deposit = prompt("Enter Initial Deposit in the format :00.00: ")
	account.amount = init_deposit

	update_PIN()
}

module.exports = { open_account }
