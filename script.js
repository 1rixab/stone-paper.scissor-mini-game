let human = document.getElementById('youroptions')
let robot = document.getElementById('robotoptions')
let gobtn = document.getElementById('btn')
let endtext = document.getElementById('endresult')
let robotchoose;
let flag = 2;

function showresult (result){
  endtext.textContent = result;
}
human.addEventListener('click',function(){
if (flag === 1) {

    flag = 2;
robotchoose = Math.trunc(Math.random() * 3) + 1;
if (robotchoose === 1) {
  robot.value = 'Scissor'
  update('Scissor')
} else if (robotchoose === 2) {
 robot.value = 'Paper'
 update("Paper");
} else if (robotchoose === 3) {
  robot.value = "Stone";
   update("Stone"); 
} else {
  alert("something is wrong");
}

if (human.value === "Scissor" && robot.value === "Paper") {
  showresult("You Win!!!")
} else if (human.value === "Stone" && robot.value === "Scissor") {
  showresult("You Win!!!");
} else if (human.value === "Paper" && robot.value === "Stone") {
  showresult("You Win!!!");
} else if (robot.value === "Scissor" && human.value === "Paper") {
  showresult("Ai Win!!!");
} else if (robot.value === "Stone" && human.value === "Scissor") {
 showresult("Ai Win!!!");
} else if (robot.value === "Paper" && human.value === "Stone") {
  showresult("Ai Win!!!");
} else if (human.value === "Stone" && robot.value === "Stone") {
  showresult("No result!");
} else if (human.value === "Paper" && robot.value === "Paper") {
  showresult("No result!");
} else if (human.value === "Scissor" && robot.value === "Scissor") {
  showresult("No result!");
}
}else if(flag === 2){
    flag = 1;
    update('~processing~')
    }
})
function update(x){
     document.getElementById('robotics').innerText = x
}