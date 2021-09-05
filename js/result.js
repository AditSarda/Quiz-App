var points = sessionStorage.getItem("points");

var head_result = document.getElementById("result-header");
var body_result = document.getElementById("result-body");

if (points >= 5) {
    head_result.innerText = "That’s nice! You’ve got " + points + " out of 7 right";
    body_result.innerText = "You worked hard and it paid off! Nice work figuring out these tough questions, you earned it buddy!";
} else {
    head_result.innerText = "Oops! You’ve got only " + points + " out of 7 right";
    body_result.innerText = "Marvel have created more Avengers than even the geekiest of geeks could remember, but that doesn’t mean you shouldn’t try."
}

function reset() {
    location.href = "index.html"
}