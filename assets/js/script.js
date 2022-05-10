
let todos = [];
let storage = JSON.parse(localStorage.getItem("listName"));
storage === null ? todos = [] : todos = storage;
function refreshTodo(){
    let space = "";

    todos.forEach((item,index)=>{
        space +=
     `<li class="todo-list">
        ${item}
        <button  type="submit" onClick ="deleteTodo(${index})" class='delete-btn'>X</button>
     </li>`
    });

    list.innerHTML = space;
}
refreshTodo();
function addTodo(){

    if(!input.value == " "){
        todos.push(input.value);
        
        localStorage.setItem("listName", JSON.stringify(todos));

        input.value = "";
        refreshTodo();
    }

    else {
        alert("Please, fill write the input :)");
    }
}

addBtn.addEventListener('click', addTodo);

function deleteTodo(index){
    todos.splice(index, 1);

    localStorage.setItem("listName", JSON.stringify(todos));

    refreshTodo();
}

let countClick = 0;

function sortTodo(){
    countClick += 1;

    if (countClick % 2 == 1){
        sortSvg.src = "./images/sortDarkUp.svg";
        todos.sort();
    }
    else {
       sortSvg.src = "./images/sortDarkDown.svg";
        todos.sort().reverse();
    }

    localStorage.setItem("listName", JSON.stringify(todos));
    refreshTodo();    
}

sortBtn.addEventListener('click', sortTodo); 

document.addEventListener('keyup', logKey);

function logKey(e) {
  if (e.key === "Enter"){
    addTodo();
  }
}

sortSvg.addEventListener("mouseover", ()=>{
    let srcAttribute = sortSvg.getAttribute("src");   

    if (countClick % 2 == 0){
        sortSvg.setAttribute("src", "./images/sortDarkDown.svg");
    }
    
    else {
       sortSvg.setAttribute("src", "./images/sortDarkUp.svg");
    }
});

sortSvg.addEventListener("mouseout", ()=>{
    let srcAttribute = sortSvg.getAttribute("src");   

    if (countClick % 2 == 1){
        sortSvg.setAttribute("src", "./images/sortUp.svg");
    }
    else {
       sortSvg.setAttribute("src", "./images/sortDown.svg");
    }
});
const addBtn = document.querySelector('.add');
const input = document.querySelector('.todo');
const list = document.querySelector('.listik');
const sortBtn = document.querySelector('.sort');
const sortSvg = document.querySelector('.sort-svg');
let deleteBtn = document.querySelectorAll('.delete-btn');
let listItems = document.querySelector("li");