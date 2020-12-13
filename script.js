
//Date-------------------------------------------------------------
	let today = new Date();
	let date = new Array();

	date["year"] = today.getFullYear();
	date["month"] = today.getMonth();
	date["date"] = today.getDate();

	let maxDate = (date["year"] - 18) + "-" + (date["month"] + 1) + "-" + date["date"];
	let minDate = (date["year"] - 50) + "-" + (date["month"] + 1) + "-" + date["date"];
	let nowDate20 = (date["year"] - 20) + "-" + (date["month"] + 1) + "-" + date["date"];

	let birthday = document.getElementById("birthday");

	birthday.setAttribute("max", maxDate);
	birthday.setAttribute("min", minDate);
	birthday.setAttribute("value", nowDate20);


//Validate-------------------------------------------------------------
	let dateBool = false;
	let emailBool = false;
	let passBool = false;
	let nameBool = false;
	let ageBool = false;
	//date
		function changeAgeOrDate(){
			let age = document.getElementById("age");

			//count true years
			let birthdayValue = new Date(birthday.value); birthdayValue.setHours(0);
			let trueAge = (new Date(Date.now() - birthdayValue.getTime())).getFullYear() - 1970;

			if(trueAge != age.value && age.value){
				age.classList.add('inval');
				age.classList.add('is-invalid');
				birthday.classList.add('inval');
				dateBool = ageBool = false;
			}
			else{
				age.classList.remove('inval');
				age.classList.remove('is-invalid');
				birthday.classList.remove('inval');
				dateBool = ageBool = true;
			}
		}
		document.getElementById("age").oninput = changeAgeOrDate;
		document.getElementById("birthday").oninput = changeAgeOrDate;

	//email
		document.getElementById("email").oninput = () => {
			var adr_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+")){3,}@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/;
			var email = document.getElementById("email").value;
			if(adr_pattern.test(email)){
				document.getElementById("email").classList.add('is-valid');
				document.getElementById("email").classList.remove('is-invalid');
				emailBool = true;
			}
			else{
				document.getElementById("email").classList.add('is-invalid');
				document.getElementById("email").classList.remove('is-valid');
				emailBool = false;
			}
		}

	//password
		document.getElementById("password").oninput = () => {
			var password = document.getElementById("password").value;
			if(password.length >= 8 && password.length <= 20){
				document.getElementById("password").classList.add('is-valid');
				document.getElementById("password").classList.remove('is-invalid');
				passBool = true;
			}
			else{
				document.getElementById("password").classList.add('is-invalid');
				document.getElementById("password").classList.remove('is-valid');
				passBool = false;
			}
		}

	//name
		document.getElementById("name").oninput = () => {
			var name = document.getElementById("name").value;
			if(name == ""){
				document.getElementById("name").classList.add('is-invalid');
				document.getElementById("name").classList.remove('is-valid');
				nameBool = false;
			}
			else{
				document.getElementById("name").classList.remove('is-invalid');
				document.getElementById("name").classList.add('is-valid');
				nameBool = true;
			}
		}

	//validate data afte click
		document.querySelector('button').onclick = (event) => {
			let form = document.querySelector('form');
			let name = form.elements.name.value;
			let email = form.elements.email.value;
			let pass = form.elements.password.value;
			let birthday = form.elements.birthday.value;
			let age = form.elements.age.value;

			if(name === "" || email === "" || pass === "" || age === "" ||
				!dateBool || !emailBool || !passBool){
				event.preventDefault();
				//name
				if(name === ""){
					document.getElementById("name").classList.add('is-invalid');
					nameBool = false;
				}
				if(email === ""){
					document.getElementById("email").classList.add('is-invalid');
					emailBool = false;
				}
				if(pass === ""){
					document.getElementById("password").classList.add('is-invalid');
					passBool = false;
				}
				if(age === ""){
					document.getElementById("age").classList.add('is-invalid');
					document.getElementById("age").classList.add('inval');
					ageBool = false;
				}
			}
		}


//Radio-----------------------------------------------------------------
	//additional information
	let yes = document.getElementById('radio1');
	let no = document.getElementById('radio2');
	yes.onchange = function() {  
		document.getElementById("additionalInf1").style.display = 'block';
		document.getElementById("additionalInf2").style.display = 'block';
	};
	no.onchange = function() {
		document.getElementById("additionalInf1").style.display = 'none';
		document.getElementById("additionalInf2").style.display = 'none';
	};


//Select-----------------------------------------------------------------
	//sekect a rocket
	let selectedOption = document.getElementById('rocket');
	let printModels = document.getElementById("models");
	let printPlanets = document.getElementById("planets");
	let rocketList=new Array()
		rocketList["SpaceX"] = ["Falcon 9 Full Trast", "Falcon Heavy", "Dragon 2"]
			rocketList["SpaceX"]["Falcon 9 Full Trast"] = ["Jupiter", "Neptún", "Mars"]
			rocketList["SpaceX"]["Falcon Heavy"] = ["Urán", "Neptún"]
			rocketList["SpaceX"]["Dragon 2"] = ["Mars", "Saturn"]

		rocketList["Arianespace"] = ["Ariane 5", "Ariane 6", "Vega"]
			rocketList["Arianespace"]["Ariane 5"] = ["Merkúr", "Urán"]
			rocketList["Arianespace"]["Ariane 6"] = ["Merkúr", "Urán", "Neptún"]
			rocketList["Arianespace"]["Vega"] = ["Venuša", "Mars"]

		rocketList["BlueOrigin"]=["New Shepard", "New Glenn"]
			rocketList["BlueOrigin"]["New Shepard"] = ["Mesiac" , "Voyager"]
			rocketList["BlueOrigin"]["New Glenn"] = ["Mesiac" , "Mars "]

		rocketList["Alliance"]=["Delta II", "Delta III", "Delta IV"]
			rocketList["Alliance"]["Delta II"] = ["Mesiace", "Jupiter"]
			rocketList["Alliance"]["Delta III"] = ["Neptún", "Urán"]
			rocketList["Alliance"]["Delta IV"] = ["Merkúr", "Mesiace"]

	rocketList["SpaceX"].forEach(function(item){ printModels.options[printModels.options.length]= new Option(item); });

	selectedOption.onchange = function() {
		let thisArr = rocketList[selectedOption.value];
		printModels.options.length = 0
		thisArr.forEach(
			function(item){ 
				printModels.options[printModels.options.length] = new Option(item); 
			}
		);
	};

	rocketList["SpaceX"]["Falcon 9 Full Trast"].forEach(function(item){ printPlanets.options[printPlanets.options.length]= new Option(item); });
	printModels.onchange = function() {
		let thisArr = rocketList[selectedOption.value][printModels.value];
		printPlanets.options.length = 0
		thisArr.forEach(function(item){ printPlanets.options[printPlanets.options.length]= new Option(item); });
	};


//Checkbox-----------------------------------------------------------------------
	//visible text input
		document.getElementById('other').oninput = () =>{
			let otherCheckBox = document.getElementById('other');
			if(otherCheckBox.checked){
				//document.getElementById("otherEnter").style.visibility = 'visible';
				document.getElementById("otherEnter").style.display = 'block';
			}
			else{
				//document.getElementById("otherEnter").style.visibility = 'hidden';
				document.getElementById("otherEnter").style.display = 'none';
			}
		}