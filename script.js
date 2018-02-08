//
// class Pizza {
// 	constructor(price, pepperoniBool, sauceBool, sausageBool, cheeseBool = true) {
// 		this.pizzaArray = [];
// 		//////figure a way to add prices for each ingredient
// 		this.price = price;
// 		this.pepperoni = pepperoniBool;
// 		this.sausage = sausageBool;
// 		this.sauce = sauceBool;
// 		this.cheese = cheeseBool;
// 	}
// }

class Pizza{
	constructor(ingredients)
	{
		console.log('ingredients before :', ingredients);
		ingredients.push('cheese');
		this.ingredientsArray = ingredients;
		console.log('ingredients after :', ingredients);
			console.log('this.ingredientsArray :', this.ingredientsArray)
	}
}

class Order{
	constructor(pizzaArray){
		this.pizzaArray = pizzaArray;

	}
		calculateOrderCost()
		{
			let total = 0;
			console.log('this.pizzaArray :', this.pizzaArray);
			for (let i=0;i < this.pizzaArray.length;i++){
				console.log('the total before is :,', total);
				console.log('The pizza ingredients array length is ;', this.pizzaArray[i].ingredientsArray.length);
				total += 10 + ((this.pizzaArray[i].ingredientsArray.length -1) * .99);
				console.log('the total after is :,', total);
			}
			return total.toFixed(2);
		}
}

function theOrder(){
	//Make pizza's
	pepperoniPizza = new Pizza(['pepperoni']);
	plainPizza = new Pizza([]);

	//Make order
	orderPizza = new Order([pepperoniPizza, plainPizza]);
	console.log('orderPizza is :', orderPizza);
	amountToBill = orderPizza.calculateOrderCost();
	console.log('Amount to bill customer :$',amountToBill);
}
theOrder();