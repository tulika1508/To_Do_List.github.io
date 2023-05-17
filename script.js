const input=document.getElementById("inputBox");
const listContainer=document.getElementById("taskList");
function addTask(){
    if(input.value==''){
        alert("You must write some task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    savedata();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("check");
        savedata();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
     localStorage.setItem("data",listContainer.innerHTML);
}
function show(){
    listContainer.innerHTML=localStorage.getItem("data");
}
show();