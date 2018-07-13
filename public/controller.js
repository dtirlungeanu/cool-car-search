$('#search').keyup(function(){
	$.getJSON('http://localhost:3000/vehicles', function(data){
		let search = $('#search').val();
		let regex = new RegExp(search, 'i');
		let output;
		$.each(data, function(key, value){
			if(key && value && typeof value >= 0 || value.vehicleCapDetails.capMakeName.search(regex) !== -1 || value.vehicleCapDetails.capModelName.search(regex) !== -1){
				output += "<tr>";
				output += "<td id='"+key+"'>"+value.id+"</td>";
				output += "<td id='"+key+"'>"+value.vehicleCapDetails.capMakeName+"</td>";
				output += "<td id='"+key+"'>"+value.vehicleCapDetails.capModelName+"</td>";
				output += "<td id='"+key+"'>"+value.fuel+"</td>";
				output += "<td id='"+key+"'>"+value.statistics.enginePower+"</td>";
				output += "<td id='"+key+"'>"+value.year+"</td>";
				output += "<td id='"+key+"'>"+value.statistics.mpg+"</td>";			
				output += "</tr>";
			}
		});
		$('tbody').html(output);
	});
})


        // "capModelName": "A1 DIESEL HATCHBACK",
        // "engineSize": 1598,
        // "capMakeName": "AUDI",
        // "presentationRange": "A1",
        // "capRangeName": "A1",


$('#AudiA1').click(function(){
	$.getJSON('http://localhost:3000/vehicles')
	.then((data) => {
		let output;
		data.forEach(function(value){ // clearly a loop
			if (value.vehicleCapDetails.capRangeName == 'A1') {
				output += "<tr>";
				output += "<td>"+value.id+"</td>";
				output += "<td>"+value.vehicleCapDetails.capMakeName+"</td>";
				output += "<td>"+value.vehicleCapDetails.capModelName+"</td>";
				output += "<td>"+value.fuel+"</td>";
				output += "<td>"+value.statistics.enginePower+"</td>";
				output += "<td>"+value.year+"</td>";
				output += "<td>"+value.statistics.mpg+"</td>";			
				output += "</tr>";
			}
		});
	$('tbody').html(output);
	});
});

$('#AudiA3').click(function(){
	$.getJSON('http://localhost:3000/vehicles')
	.then((data) => {
		let output;
		data.forEach(function(value){ // clearly a loop
			if (value.vehicleCapDetails.capRangeName == 'A3') {
				output += "<tr>";
				output += "<td>"+value.id+"</td>";
				output += "<td>"+value.vehicleCapDetails.capMakeName+"</td>";
				output += "<td>"+value.vehicleCapDetails.capModelName+"</td>";
				output += "<td>"+value.fuel+"</td>";
				output += "<td>"+value.statistics.enginePower+"</td>";
				output += "<td>"+value.year+"</td>";
				output += "<td>"+value.statistics.mpg+"</td>";			
				output += "</tr>";
			}
		});
	$('tbody').html(output);
	});
});

$('#AudiA5').click(function(){
	$.getJSON('http://localhost:3000/vehicles')
	.then((data) => {
		let output;
		data.forEach(function(value){ // clearly a loop
			if (value.vehicleCapDetails.capRangeName == 'A1') {
				output += "<tr>";
				output += "<td>"+value.id+"</td>";
				output += "<td>"+value.vehicleCapDetails.capMakeName+"</td>";
				output += "<td>"+value.vehicleCapDetails.capModelName+"</td>";
				output += "<td>"+value.fuel+"</td>";
				output += "<td>"+value.statistics.enginePower+"</td>";
				output += "<td>"+value.year+"</td>";
				output += "<td>"+value.statistics.mpg+"</td>";			
				output += "</tr>";
			}
		});
	$('tbody').html(output);
	});
});

$('#AudiA1').click(function(){
	$.getJSON('http://localhost:3000/vehicles')
	.then((data) => {
		let output;
		data.forEach(function(value){ // clearly a loop
			if (value.vehicleCapDetails.capRangeName == 'A1') {
				output += "<tr>";
				output += "<td>"+value.id+"</td>";
				output += "<td>"+value.vehicleCapDetails.capMakeName+"</td>";
				output += "<td>"+value.vehicleCapDetails.capModelName+"</td>";
				output += "<td>"+value.fuel+"</td>";
				output += "<td>"+value.statistics.enginePower+"</td>";
				output += "<td>"+value.year+"</td>";
				output += "<td>"+value.statistics.mpg+"</td>";			
				output += "</tr>";
			}
		});
	$('tbody').html(output);
	});
});

$('#AudiA1').click(function(){
	$.getJSON('http://localhost:3000/vehicles')
	.then((data) => {
		let output;
		data.forEach(function(value){ // clearly a loop
			if (value.vehicleCapDetails.capRangeName == 'A1') {
				output += "<tr>";
				output += "<td>"+value.id+"</td>";
				output += "<td>"+value.vehicleCapDetails.capMakeName+"</td>";
				output += "<td>"+value.vehicleCapDetails.capModelName+"</td>";
				output += "<td>"+value.fuel+"</td>";
				output += "<td>"+value.statistics.enginePower+"</td>";
				output += "<td>"+value.year+"</td>";
				output += "<td>"+value.statistics.mpg+"</td>";			
				output += "</tr>";
			}
		});
	$('tbody').html(output);
	});
});

$('#AudiA1').click(function(){
	$.getJSON('http://localhost:3000/vehicles')
	.then((data) => {
		let output;
		data.forEach(function(value){ // clearly a loop
			if (value.vehicleCapDetails.capRangeName == 'A1') {
				output += "<tr>";
				output += "<td>"+value.id+"</td>";
				output += "<td>"+value.vehicleCapDetails.capMakeName+"</td>";
				output += "<td>"+value.vehicleCapDetails.capModelName+"</td>";
				output += "<td>"+value.fuel+"</td>";
				output += "<td>"+value.statistics.enginePower+"</td>";
				output += "<td>"+value.year+"</td>";
				output += "<td>"+value.statistics.mpg+"</td>";			
				output += "</tr>";
			}
		});
	$('tbody').html(output);
	});
});





// document.getElementById('getVehicleInfo').addEventListener('click', getVehicleInfo);
// 	function getVehicleInfo(){
// 		console.log(123);
// 		$.getJSON('http://localhost:3000/vehicles')

// 		.then(function(res){
// 			return res.json();
// 		})
// 		.then(function(data){
// 			console.log(data);
// 		});

// 		// .then((res) => res.json())
// 		// .then((data) => {
// 		// 	let output = '<h2 class="jumbotron">Vehicles</h2>'
// 		// 	data.forEach(function(vehicle){ // clearly a loop
// 		// 		// implementing hyper text into javascript
// 		// 		output += ` 
// 		// 			<ul class="jumbotron col-lg-12">
// 		// 				<li class="col-lg-4"><h4> ID: ${vehicle.id} </h4></li> 
// 		// 				<li class="col-lg-4"><h4> Name: ${vehicle.vehicleCapDetails.capModelName} </h4></li>
// 		// 				<li class="col-lg-4"><h4> Vehicle year: ${vehicle.year} </h4></li>
// 		// 			</ul>
// 		// 		`; //adding on or appending (if my spelling is correct at this hour)				
// 		// 	});
// 		// 	document.getElementById('output').innerHTML = output;
// 		// });
// 	}



	// document.getElementById('AudiAone').addEventListener('click', AudiAone);
	// function AudiAone(){
	// 	console.log(123);
	// 	fetch('http://localhost:3000/vehicles')

	// 	// .then(function(res){
	// 	// 	return res.json();
	// 	// })
	// 	// .then(function(data){
	// 	// 	console.log(data);
	// 	// });

	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		let output = '<h2 class="jumbotron">Audi A1 Results</h2>'
	// 		data.forEach(function(vehicle){ // clearly a loop
	// 			// implementing hyper text into javascript
	// 			output += ` 
	// 				<ul class="jumbotron col-lg-12">
	// 					<li class="col-lg-4"><h4> ID: ${vehicle.id} </h4></li> 
	// 					<li class="col-lg-4"><h4> Name: ${vehicle.year} </h4></li>
	// 					<li class="col-lg-4"><h4> Model Name: ${vehicle.vehicleCapDetails.capMakeName} </h4></li>
	// 				</ul>
	// 			`; //adding on or appending (if my spelling is correct at this hour)				
	// 		});
	// 		document.getElementById('output').innerHTML = output;
	// 	})
	// 	.catch((err) => console.log(err))
	// }




	// document.getElementById('getResults').addEventListener('submit', getResults);
	// function getResults(e){
	// 	e.preventDefault();

	// 	let title = document.getElementById('title').value;

	// 	fetch('http://localhost:3000/vehicles', {
	// 		method:'GET',
	// 		headers: { // settin it as an object
	// 			'Accept': 'application/json, text/plain, */*', // last accept form is anything from anything
	// 			'Content-type':'application/json'
	// 		}
	// 	})
	
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		data.forEach(function(vehicle){
	// 		output += `<h2 class="jumbotron"> ID: ${vehicle.id}</h2>`;
	// 		document.getElementById('output').innerHTML = output;
	// 	});
	// });
	// }
