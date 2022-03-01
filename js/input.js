let inputs = document.getElementsByClassName('input-form');
		for (let input of inputs) { //percorrer inputs
			input.addEventListener("blur", function() {
				if(input.value.trim() != ""){
					input.classList.add("has-val");
				} else {
					input.classList.remove("has-val");
				}
			});
		}