const totalCost = document.querySelector('.total-cost');
const cartItems = document.querySelector('.cart__items');
const productItems = document.querySelector('.products__items');
const removeBtn = document.querySelector('.remove-btn');
const absoBtn = document.querySelector('.abso-btn');
const template = document.querySelector('.order-temp').content;
var total = 0;

const data = [
	{
		id: 1,
		title: 'Galaxy S23 Ultra',
		cost: 1300,
		url: './Practise_files/s23 ultra.jpg',
	},
	{
		id: 2,
		title: 'Galaxy Z Flip 4',
		cost: 700,
		url: './Practise_files/z flip.jpg',
	},
	{
		id: 3,
		title: 'Galaxy Z Fold 4',
		cost: 600,
		url: './Practise_files/z fold.jpg',
	},
	{
		id: 4,
		title: 'Neo Q Led 8',
		cost: 41,
		url: './Practise_files/neo qled.jpg',
	},
	{
		id: 5,
		title: 'Galaxy Watch 5',
		cost: 345,
		url: './Practise_files/smart watch.jpg',
	},
	{
		id: 6,
		title: 'Galaxy Buds 2 Pro',
		cost: 150,
		url: './Practise_files/buds pro2.jpg',
	},
];

const products = [];
const frag = new DocumentFragment();

productItems.addEventListener('click', (evt) => {
	if (evt.target.matches('.abso-btn')) {
		const id = Number(evt.target.dataset.id);
		if (!products.includes(data[id - 1])) {
			products.push(data[id - 1]);
			total += Number(data[id - 1].cost);
		}
		totalCost.textContent = total;
		cartItems.textContent = '';
		products.forEach((item) => {
			const temp = template.cloneNode(true);
			temp.querySelector('.cart__item').dataset.id = item.id;
			temp.querySelector('.remove-btn').dataset.id = item.id;
			temp.querySelector('.cart__img').src = item.url;
			temp.querySelector('.cart__item__name').textContent = item.title;
			temp.querySelector('.price').textContent = item.cost;
			frag.appendChild(temp);
		});
		cartItems.appendChild(frag);
	}
});
cartItems.addEventListener('click', (evt) => {
	if (evt.target.matches('.remove-btn')) {
		const delBtnId = Number(evt.target.dataset.id);
		const delProducts = products.findIndex((item) => item.id === delBtnId);
		total -= products[delProducts].cost;
		products.splice(delProducts, 1);
		console.log(delProducts);
		totalCost.textContent = total;
		cartItems.textContent = '';
		products.forEach((item) => {
			const temp = template.cloneNode(true);
			temp.querySelector('.cart__item').dataset.id = item.id;
			temp.querySelector('.remove-btn').dataset.id = item.id;
			temp.querySelector('.cart__img').src = item.url;
			temp.querySelector('.cart__item__name').textContent = item.title;
			temp.querySelector('.price').textContent = item.cost;
			frag.appendChild(temp);
		});
		cartItems.appendChild(frag);
	}
});
