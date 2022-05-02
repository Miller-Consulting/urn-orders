const cont = document.getElementById("continue");
const urn = document.getElementById("urns");
const urn_list = document.getElementsByClassName("urn-card");
const services = document.getElementById("services");

cont.addEventListener("click", function(event){
	services.style.display="none";
	urn.style.display="block";
	 document.getElementsByClassName("header")[0].style.display="none";
	 document.getElementById("urn-info").style.display="flex";
});

for (let i = 0; i < 18; i++) {
	urn_list[i].addEventListener("click", function(event){
		document.getElementById("chosen-name").innerHTML = urn_list[i].dataset.name;
		document.getElementById("chosen-price").innerHTML = urn_list[i].dataset.price;
		document.getElementById("chosen-desc").innerHTML = urn_list[i].dataset.desc;
		document.getElementById("chosen-image").src = urn_list[i].src;

		if(urn_list[i].dataset.alt1) {
			document.getElementById("urn-colors").innerHTML = 
			`<img class="urn-color" src="${urn_list[i].dataset.alt1}" alt="Alternate Color">`;
		} else {
			document.getElementById("urn-colors").innerHTML = "";
		}
		if (urn_list[i].dataset.alt2) {
			document.getElementById("urn-colors").innerHTML += 
			`<img class="urn-color" src="${urn_list[i].dataset.alt2}" alt="Alternate Color">`;
		}

		document.getElementsByClassName("selected")[0].className = "urn-card";
		urn_list[i].className="urn-card selected";

		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
}