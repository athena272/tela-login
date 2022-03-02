var inputs = document.getElementsByClassName('input-form');
for (let input of inputs) { //percorrer inputs
	input.addEventListener("blur", function () {
		if (input.value.trim() != "") {
			input.classList.add("has-val");
		} else {
			input.classList.remove("has-val");
		}
	});
}

let form = document.getElementById('login-form');
form.addEventListener("submit", function (event) {
	for (let input of inputs) {
		if (input.value.trim() == "") {
			input.parentElement.classList.add("wrap-input-invalid");
		} else {
			input.parentElement.classList.remove("wrap-input-invalid");
		}
	}

	event.preventDefault(); //Evento finalizado, sem que a pagina seja redirecionada 
});

// Request para Login

function requestLogin() {
	// let url = "https://cloud.softgreen.com.br/challenge/login_stage.jsp?token=23e7d522c465018a590d456233a8f114a1207210&key=ba94792bcddbec068cfc784634cd67ea635723a7"

	let url = "https://cloud.softgreen.com.br/challenge/login_stage.jsp?token=ukraine&key=yellow"
	
	fetch(url).then(res => res.json()).then(output => {
		
		let response = JSON.stringify(output)

		response = JSON.parse(response)[0]

	})
	
	return response

};
