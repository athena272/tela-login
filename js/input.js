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
		if (input.value.trim() != "") {
			input.parentElement.classList.add("wrap-input-invalid");
		} else {
			input.parentElement.classList.remove("wrap-input-invalid");
		}
	}

	event.preventDefault(); //Evento finalizado, sem que a pagina seja redirecionada 
});