const inputBox = document.getElementById("inputbox");
const Listcontainer = document.getElementById("List-container");

function AddTask(){
   if(inputBox.value === ''){
    alert("you must write something!");
   }
   else{
    let li =document.createElement("li");
    li.innerHTML = inputBox.value;
    Listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
   }
   inputBox.value="";
   saveData();
}

Listcontainer.addEventListener("click",function(e){
  if(e.target.tagName === "LI"){
    e.target.ClassList.toggle("checked");
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
 },false);

 function saveData(){
    localStorage.setItem("data",Listcontainer.innerHTML);
 }
 function showTask(){
    Listcontainer.innerHTML = localStorage.getItem("data");
 }
 showTask();