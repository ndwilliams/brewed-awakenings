import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

document.addEventListener("click", (clickEvent) => {
	const itemClicked = clickEvent.target

	// Was an employee list item clicked?
	if (itemClicked.dataset.type === "employee") {
		// Get the id of the employee clicked
		const employee = parseInt(itemClicked.dataset.id)

		// start a counter variable at 0
		let orderCounter = 0

		// Iterate through all the orders
		for (const order of orders) {
			// Does the employeeId foreign key match the id of the employee clicked?
			if (employee === order.employeeId) {
				// increase the counter by 1
				orderCounter++
			}
		}

		const employeeName = itemClicked.dataset.employeename

		// display window alert
		window.alert(`${employeeName} sold ${orderCounter} product(s)`)
	}
})

export const Employees = () => {
	let html = "<ul>"

	for (const employee of employees) {
		html += `<li
                data-type="employee"
                data-id="${employee.id}"
                data-employeename="${employee.name}"
                >${employee.name}</li>`
	}

	html += "</ul>"

	return html
}
