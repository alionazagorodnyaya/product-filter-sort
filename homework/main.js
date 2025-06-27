const header = document.querySelector(".header");
const searchInput = document.querySelector(".search_input");
const checkInput = document.querySelector(".check-input");
const sortPrice = document.querySelector(".sort__price");
const cards = document.querySelectorAll(".card");
const productsAll = document.querySelector(".cards");

function productsfilter() {
	const value = searchInput.value.toLowerCase();
	const isChecked = checkInput.checked;
	for (const card of cards) {
		const searchText = card.querySelector(".product-name");
		const searchName = searchText.textContent.toLowerCase();
		const stock = card.querySelector(".stock");
		const stockText = stock.textContent;
		if (isChecked) {
			if (
				searchName.startsWith(value) &&
				stockText.includes("В наличии")
			) {
				card.style.display = "flex";
			} else {
				card.style.display = "none";
			}
		} else {
			if (searchName.startsWith(value)) {
				card.style.display = "flex";
			} else {
				card.style.display = "none";
			}
		}
	}
}
searchInput.oninput = productsfilter;
checkInput.onchange = productsfilter;

sortPrice.onchange = () => {
	const select = sortPrice.value;
	const cardsArray = Array.from(cards);
	cardsArray.sort((card1, card2) => {
		const price1 = Number(
			card1.querySelector(".price").textContent.split("$")[1]
		);
		const price2 = Number(
			card2.querySelector(".price").textContent.split("$")[1]
		);
		if (select == "По возрастанию") {
			return price1 - price2;
		} else if (select == "По убыванию") {
			return price2 - price1;
		} else {
			return 0;
		}
	});
	productsAll.innerHTML = "";
	for (const card of cardsArray) {
		productsAll.append(card);
	}
};
