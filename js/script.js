// Request para Login
function requestLogin() {
	
	let url = "https://cloud.softgreen.com.br/challenge/login_stage.jsp?token=0c4fb5956d00091319b39929e084b02e0056bf93&key=96de5543d183d7de52ac5fa21c46fc811f673f89"
	
	return fetch(url).then(res => res.json()).then(output => {
		
		let response = JSON.stringify(output)

		response = JSON.parse(response)[0]
		
		return response;
	})
	
};

function openModal() {
	let modal = document.getElementById('div-modal');

	if(typeof modal == "undefined" || modal === null)
		return;
	
	modal.style.display = "block";

	let response = requestLogin();

	// response.then((x) => console.log(x.result));
	response.then((x) => {

		document.getElementById('status').innerHTML = "Result: " + x.result
	
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

