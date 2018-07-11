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

document.getElementById('getText').addEventListener('click', getText);
	function getText(){
		console.log(123);
		fetch('http://localhost:3000/vehicles')
		.then(function(res){
			return res.json();
		})
		.then(function(data){
			console.log(data);
		});
	}

// document.querySelector('getText').addEventListener('keypress', function (e) {
//     var key = e.which || e.keyCode;
//     if (key === 13) { // 13 is enter
//       function getText(){
//         console.log(123);
//       }
//     }
// });