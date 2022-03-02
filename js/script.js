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
async function requestLogin() {
	
	let url = "https://cloud.softgreen.com.br/challenge/login_stage.jsp?token=0c4fb5956d00091319b39929e084b02e0056bf93&key=96de5543d183d7de52ac5fa21c46fc811f673f89"
	
	const response = await fetch(url);
	
	let data = await response.json();

	data = JSON.stringify(data);

	return JSON.parse(data)[0];
	
};

function openModal() {
	let modal = document.getElementById('div-modal');

	if(typeof modal == "undefined" || modal === null)
		return;
	
	modal.style.display = "block";

	let response = requestLogin();

	response.then((message) => {

		document.getElementById('status').innerHTML = "Result: " + message.result
	
	});

	

}

function closeModal(modalName) {

	let modal = document.getElementById(modalName);

	if(typeof modal == "undefined" || modal === null)
		return;
	
	modal.style.display = "none";
}

function access() {
	requestLogin();
	openModal();

}

