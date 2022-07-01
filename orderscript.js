const cont = document.getElementById("continue");
const urn = document.getElementById("urns");
const urn_list = document.getElementsByClassName("urn-card");
const keep_list = document.getElementsByClassName("keepsake-card");
const services = document.getElementById("services");
const colors = document.getElementsByClassName("urn-color");
let color_number = 0;
let keepCount = 0;


let choice = {};


cont.addEventListener("click", function(event){
	let selections = document.getElementsByName("order_select");

	for(i = 0; i < selections.length; i++) {
		if(selections[i].checked) {
			choice.order = selections[i].value;

			services.style.display="none";
			urn.style.display="flex";
			document.getElementsByClassName("header")[0].style.display="none";
			document.getElementById("urn-info").style.display="flex";
		}
	}
});

//urn select
for (let i = 0; i < urn_list.length; i++) {
	urn_list[i].addEventListener("click", function(event){
		document.getElementById("chosen-name").innerHTML = urn_list[i].dataset.name;
		document.getElementById("chosen-price").innerHTML = urn_list[i].dataset.price;
		document.getElementById("chosen-desc").innerHTML = urn_list[i].dataset.desc;
		document.getElementById("chosen-image").src = urn_list[i].src;

		document.getElementsByClassName("selected")[0].className = "urn-card";
		urn_list[i].className="urn-card selected";

		if(urn_list[i].dataset.alt1) {
			document.getElementById("urn-colors").innerHTML = 
				`<img class="urn-color" src="${urn_list[i].src}" alt="Alternate Color">`;
			document.getElementById("urn-colors").innerHTML += 
				`<img class="urn-color" src="${urn_list[i].dataset.alt1}" alt="Alternate Color">`;
		} else {
			document.getElementById("urn-colors").innerHTML = "";
		}
		if (urn_list[i].dataset.alt2) {
			document.getElementById("urn-colors").innerHTML += 
				`<img class="urn-color" src="${urn_list[i].dataset.alt2}" alt="Alternate Color">`;
		}

		for(let j = 0; j < colors.length; j++) {
			colors[j].addEventListener("click", function(event){
				document.getElementById("chosen-image").src = colors[j].src;
				color_number = j+1;
			});
		}

		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
}

for(let j = 0; j < colors.length; j++) {
	colors[j].addEventListener("click", function(event){
		document.getElementById("chosen-image").src = colors[j].src;
		color_number = j+1;
	});
}

document.getElementById("select-urn").addEventListener("click", function(event){
	window.scrollTo({ top: 0, behavior: 'smooth' });

	choice.name = document.getElementById("chosen-name").innerHTML;
	choice.price = document.getElementById("chosen-price").innerHTML;
	choice.desc = document.getElementById("chosen-desc").innerHTML;
	choice.image = document.getElementById("chosen-image").src;
	choice.color = color_number;

	document.getElementById("selected-urn").style.display="flex";

	let xButton = document.createElement("div");
	xButton.setAttribute("class", "x-button")
	xButton.addEventListener("click", function(){
		document.getElementById("selected-urn").style.display="none";
		document.getElementById("keepsakes").style.display="none";
		document.getElementById("keepsake-info").style.display="none";

		urn.style.display="flex";
		document.getElementById("urn-info").style.display="flex";
		document.getElementById("selected-urn").innerHTML = "";

		document.getElementById("final-order").innerHTML = ""
		document.getElementById("final-order").style.display = "none";
		document.getElementById("confirm-order").style.display = "none";
		document.getElementById("complete-order").style.display="none";


		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
	xButton.innerHTML = "&#10006;";

	let img = document.createElement("img");
	img.setAttribute("id","urn-thumbnail");
	img.setAttribute("src",choice.image);

	let nameDiv = document.createElement("div");
	nameDiv.innerHTML = choice.name;

	let priceDiv = document.createElement("div");
	priceDiv.innerHTML = choice.price;

	document.getElementById("selected-urn").append(xButton);
	document.getElementById("selected-urn").append(img);
	document.getElementById("selected-urn").append(nameDiv);
	document.getElementById("selected-urn").append(priceDiv);

	urn.style.display="none";
	document.getElementById("urn-info").style.display="none";
	document.getElementById("keepsakes").style.display="flex";
	document.getElementById("keepsake-info").style.display="flex";
	document.getElementById("complete-order").style.display="block";
});


//keepsake chooser
for (let i = 0; i < keep_list.length; i++) {
	keep_list[i].addEventListener("click", function(event){
		document.getElementById("keepsake-name").innerHTML = document.getElementsByClassName("keepsake-name")[i].innerHTML;
		document.getElementById("keepsake-price").innerHTML = document.getElementsByClassName("keepsake-price")[i].innerHTML;
		document.getElementById("keepsake-image").src = keep_list[i].src;

		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
}

document.getElementById("select-keepsake").addEventListener("click", function(event){
	choice[keepCount] = {
		name: document.getElementById("keepsake-name").innerHTML,
		price: document.getElementById("keepsake-price").innerHTML,
		image: document.getElementById("keepsake-image").src,
		quantity: document.getElementById("qty").value
	};

	keepCount++;
	document.getElementById("keepsake-list").innerHTML = "";


	for(let i = 0; i < keepCount; i++) {

		if(choice[i]) {
			let keepsakeRow = document.createElement("div");
			keepsakeRow.setAttribute("class", "keepsake-row");
			keepsakeRow.setAttribute("data-keepsake-number", i);

			let xButton = document.createElement("div");
			xButton.setAttribute("class", "x-button");
			xButton.innerHTML = "&#10006;";
			xButton.addEventListener("click", function(){
				let keepsake = document.querySelector(`[data-keepsake-number="${i}"`);
				if (keepsake) {
					keepsake.remove();
					choice[i] = "";
					//window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
				}
				if (document.getElementsByClassName("keepsake-row").length == 0) {
					document.getElementById("keepsake-list").style.display = "none";
					window.scrollTo({ top: 0, behavior: 'smooth' });	
				}
				document.getElementById("final-order").innerHTML = ""
				document.getElementById("final-order").style.display = "none";
				document.getElementById("confirm-order").style.display = "none";
				document.getElementById("complete-order").style.display="block";
			});

			let div = document.createElement("div");
			div.setAttribute("class", "keepsake-list-card");

			let img = document.createElement("img");
			img.setAttribute("class","keepsake-list-thumbnail");
			img.setAttribute("src",choice[i].image);

			let nameDiv = document.createElement("div");
			nameDiv.innerHTML = choice[i].name;

			let priceDiv = document.createElement("div");
			priceDiv.innerHTML = choice[i].price;

			let qtyDiv = document.createElement("div");
			qtyDiv.innerHTML = "x" + choice[i].quantity;

			let totalCostDiv = document.createElement("div");
			totalCostDiv.setAttribute("class", "total-cost-card");

			let totalDiv = document.createElement("div");
			totalDiv.setAttribute("id", "total-cost");
			totalDiv.innerHTML = "Total cost:"

			let costDiv = document.createElement("div");
			costDiv.innerHTML = "$"+parseInt(choice[i].price.replace(/\D/g, ""))*choice[i].quantity;

			keepsakeRow.append(xButton);
			div.append(img);
			div.append(nameDiv);
			keepsakeRow.append(div);
			keepsakeRow.append(priceDiv);
			keepsakeRow.append(qtyDiv);
			totalCostDiv.append(totalDiv);
			totalCostDiv.append(costDiv);
			keepsakeRow.append(totalCostDiv);

			document.getElementById("keepsake-list").append(keepsakeRow);
		}
	}

	document.getElementById("keepsake-list").style.display = "flex";
	document.getElementById("final-order").innerHTML = ""
	document.getElementById("final-order").style.display = "none";
	document.getElementById("confirm-order").style.display = "none";
	document.getElementById("complete-order").style.display="block";

	//let scrollOffset = document.getElementById("keepsake-info").offsetHeight + 
						//document.getElementById("selected-urn").offsetHeight +
						//document.getElementById("keepsake-list").offsetHeight;
	//window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
});

document.getElementById("complete-order").addEventListener("click", function(){
	document.getElementById("complete-order").style.display="none";

	let final = document.getElementById("final-order");

	let table = document.createElement("table");
	table.setAttribute("class", "order-table");

	let thead = document.createElement("thead");
	thead.innerHTML = "<tr>" +
						"<th>Name</th>" +
						"<th>Price</th>" +
						"<th>Quantity</th>" +
						"<th>Total Cost</th>" +
						"</tr>";

	let tbody = document.createElement("tbody");

	let urnTr = document.createElement("tr");
	urnTr.innerHTML = `<td>${choice.name}</td>
						<td>${choice.price}</td>
						<td>1</td>
						<td>${choice.price}</td>`;

	tbody.append(urnTr);

	let sumTotal = parseInt(choice.price.replace(/\D/g, ""));

	for(let i = 0; i < keepCount; i++) {
		if(choice[i]) {
			let tempTr = document.createElement("tr");
			tempTr.innerHTML = `<td>${choice[i].name}</td>
								<td>${choice[i].price}</td>
								<td>${choice[i].quantity}</td>
								<td>$${parseInt(choice[i].price.replace(/\D/g, ""))*choice[i].quantity}</td>`;

			sumTotal += parseInt(choice.price.replace(/\D/g, "")*choice[i].quantity);

			tbody.append(tempTr);
		}
	}

	let subtotal = document.createElement("div");
	subtotal.setAttribute("id", "subtotal");
	subtotal.innerHTML = `<div>Subtotal:</div><div>$${sumTotal}</div>`;

	table.append(thead);
	table.append(tbody);
	final.append(table);
	final.append(subtotal);
	final.style.display = "flex";

	document.getElementById("confirm-order").style.display = "block";

	//let scrollOffset = document.getElementById("keepsake-info").offsetHeight + 
						//document.getElementById("selected-urn").offsetHeight +
						//document.getElementById("keepsake-list").offsetHeight +
						//document.getElementById("complete-order").offsetHeight;
	//window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
});

document.getElementById("confirm-order").addEventListener("click", function(){
	console.log(choice.name);
	document.getElementsByName("urnName")[0].setAttribute("value", choice.name);
	document.getElementsByName("price")[0].setAttribute("value", choice.price);
});

//quantity selector
let input = document.querySelector('#qty');
var btnminus = document.querySelector('.minusBtn');
var btnplus = document.querySelector('.plusBtn');

if (input !== undefined && btnminus !== undefined && btnplus !== undefined && input !== null && btnminus !== null && btnplus !== null) {
	
	var min = Number(input.getAttribute('min'));
	var max = Number(input.getAttribute('max'));
	var step = Number(input.getAttribute('step'));

	function qtyminus(e) {
		var current = Number(input.value);
		var newval = (current - step);
		if(newval < min) {
			newval = min;
		} else if(newval > max) {
			newval = max;
		} 
		input.value = Number(newval);
		e.preventDefault();
	}

	function qtyplus(e) {
		var current = Number(input.value);
		var newval = (current + step);
		if(newval > max) newval = max;
		input.value = Number(newval);
		e.preventDefault();
	}
		
	btnminus.addEventListener('click', qtyminus);
	btnplus.addEventListener('click', qtyplus);
  
} // End if test