//input slider
let select = e => document.querySelector(e);
let selectAll = e => document.querySelectorAll(e);

let progressSlider = select("#progressSlider");
let time = select("#time");
let pause = select("#pause"); //better than document.querySelector("#pause")
let b4 = select("#b4");
let b6 = select("#b6");
let b8 = select("#b8");
let b10 = select("#b10");

let animation = gsap.to("#paard", { duration:6, ease:"none",
  motionPath:{
    path:"#motionpath",
    align:"#paard"
  },
  onUpdate: animationUpdate,
  onComplete: () => pause.innerHTML = "play"
});

progressSlider.addEventListener("input", function () {
  animation.progress(this.value).pause();
});

progressSlider.addEventListener("change", function () {
  pause.innerHTML = "play";
});

function animationUpdate() {
  progressSlider.value = animation.progress();
  time.innerHTML = this.time().toFixed(2);
}


pause.addEventListener("click", ()=> {
  animation.paused(!animation.paused());
  if(animation.progress() == 1){
    animation.restart();
  }
  pause.innerHTML = animation.paused() ? "play" : "pause";
})

//buttons

home.addEventListener("click", ()=>{
  animation.pause();
  gsap.to(animation, {progress:0});
})

candy.addEventListener("click", ()=>{
  animation.pause();
  gsap.to(animation, {progress:0.5});
})

dogpark.addEventListener("click", ()=>{
  animation.pause();
  gsap.to(animation, {progress:0.9});
})

school.addEventListener("click", ()=>{
  animation.pause();
  gsap.to(animation, {progress:1});
})