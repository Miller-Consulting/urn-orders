const cont = document.getElementById("continue");
const urn = document.getElementById("urns");
const urn_list = document.getElementsByClassName("urn-card");
const services = document.getElementById("services");
const colors = document.getElementsByClassName("urn-color");
let color_number = 0;

cont.addEventListener("click", function(event){
	services.style.display="none";
	urn.style.display="flex";
	document.getElementsByClassName("header")[0].style.display="none";
	document.getElementById("urn-info").style.display="flex";
});

for (let i = 0; i < 18; i++) {
	urn_list[i].addEventListener("click", function(event){
		document.getElementById("chosen-name").innerHTML = urn_list[i].dataset.name;
		document.getElementById("chosen-price").innerHTML = urn_list[i].dataset.price,
		document.getElementById("chosen-desc").innerHTML = urn_list[i].dataset.desc,
		document.getElementById("chosen-image").src = urn_list[i].src,

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
	choice = {
		name: document.getElementById("chosen-name").innerHTML,
		price: document.getElementById("chosen-price").innerHTML,
		desc: document.getElementById("chosen-desc").innerHTML,
		image: document.getElementById("chosen-image").src,
		color: color_number
	}
	document.getElementById("selected-urn").style.display="flex";
	document.getElementById("selected-urn").innerHTML = 
		`<img id="urn-thumbnail" src="${choice.image}"><div>${choice.name}</div><div>${choice.price}</div>`;
});