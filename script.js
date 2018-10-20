var color = document.querySelector("#color");
var body = document.querySelector(".body");

color.addEventListener("input" , ()=>{
  body.style.background=color.value;
});
