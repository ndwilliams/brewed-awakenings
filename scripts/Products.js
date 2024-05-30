import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener("click", (clickEvent) => {
	const itemClicked = clickEvent.target

	// Was a Product list item clicked?
	if (itemClicked.dataset.type === "product") {
		debugger
		// Extract name of clicked product through dataset attribute
		const productName = itemClicked.dataset.name

		// Extract price of clicked product
		const productPrice = itemClicked.dataset.price

		window.alert(`${productName} costs $${productPrice}`)
	}
})

export const Products = () => {
	let html = "<ul>"

	for (const product of products) {
		html += `<li
                data-type="product"
                data-price="${product.price}"
                data-name="${product.name}">
                ${product.name}</li>`
	}

	html += "</ul>"

	return html
}
