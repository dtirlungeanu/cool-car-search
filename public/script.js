// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});


$('.link.search').click(function(){
  $('#searching').addClass('active');
  $('#searchThis input').focus();
});

$('#closeSearch').click(function(){
  $('#searching').removeClass('active');
  $('#searchThis input').blur();
  $('#searchThis input').val('');
  $('#searchResults').empty();
});

document.getElementById('getVehicleInfo').addEventListener('click', getVehicleInfo);
	function getVehicleInfo(){
		console.log(123);
		fetch('http://localhost:3000/vehicles')

		// .then(function(res){
		// 	return res.json();
		// })
		// .then(function(data){
		// 	console.log(data);
		// });

		.then((res) => res.json())
		.then((data) => {
			let output = '<h2 class="jumbotron ">vehicles</h2>'
			data.forEach(function(vehicle){ // clearly a loop
				// implementing hyper text into javascript
				output += ` 
					<ul class="jumbotron col-lg-12">
						<li class="col-lg-4"><h4> ID: ${vehicle.id} </h4></li> 
						<li class="col-lg-4"><h4> Name: ${vehicle.year} </h4></li>
						<li class="col-lg-4"><h4> capModelName: ${vehicle.vehicleCapDetails} </h4></li>
					</ul>
				`; //adding on or appending (if my spelling is correct at this hour)				
			});
			document.getElementById('output').innerHTML = output;
		})
		.catch((err) => console.log(err))
	}

	document.getElementById('getResults').addEventListener('submit', getResults);
	function getResults(e){
		e.preventDefault();

		let title = document.getElementById('title').value;

		fetch('http://localhost:3000/vehicles', {
			method:'GET',
			headers: { // settin it as an object
				'Accept': 'application/json, text/plain, */*', // last accept form is anything from anything
				'Content-type':'application/json'
			}
		})
		.then((res) => res.json())
		.then((data) => {
			let output = '<h2 class="jumbotron"> ID: ${vehicle.id}</h2>'
			document.getElementById('output').innerHTML = output;
		});
	}