const form = document.querySelector('#form');
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const erorr = document.querySelector('#error');
let add = [];

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(data => {
    todos = data.splice(0,8);
    console.log(add);
    listTodos();
  })
}

fetchTodos();

/*
const validate = id => {
  const input = document.querySelector(id);

  if(input.value === '' || input.value.length < 1) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');

    input.focus();
    return false;

  } else {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    return true;
  }
}
*/

const NewtoDO = (todo) => {

  let card = document.createElement('div');
  card.classList.add('card', 'p-2', 'my-3', 'todo');

  let innerCard = document.createElement('div');
  innerCard.classList.add('d-flex', 'justify-content-between', 'align-items-center');

  let task = document.createElement('h3');
  task.classList.add('task');
  task.innerText = todo.title;

  /*let button = document.createElement('removeButton');
  button.classList.add('btn');
  button.innerText = 'x';
  button.addEventListener('click', () => console.log(todo.id));
*/
  


  let button = document.createElement('button');
  button.classList.add('btn', 'btn-danger');
  button.innerText = 'Delete';
  button.addEventListener('click', () => removeToDo(todo.id));


  innerCard.appendChild(task);
  innerCard.appendChild(button);
  //innerCard.appendChild(removeButton);

  card.appendChild(innerCard);
  output.appendChild(card);
}


function removeToDo(toDoID)
{

  //---------------------
  fetch('https://jsonplaceholder.typicode.com/todos',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      toDoID
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    delete todos[toDoID-1];

//-----------------------------------

    listTodos();
  })

}

const listTodos = () => {
  output.innerHTML = '';
  todos.forEach(todo => {
    // let _todo = `
        
    // <div class="card p-3 my-3 todo">
    //   <div class="d-flex justify-content-between">
    //     <h3 class="task">${todo.title}</h3>
    //     <button class="btn btn-danger">X</button>
    //   </div>
    // </div>
    // `
    // output.insertAdjacentHTML('beforeend', _todo);

    NewtoDO(todo);
  })
}


const createTodo = (title) => {

  fetch('https://jsonplaceholder.typicode.com/todos',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      title,
      completed: false
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    todos.unshift(data);
    listTodos();
  })

}

form.addEventListener('submit', e => {
  e.preventDefault();
  if (input.value !='')
  {
  createTodo(input.value);
  input.value = ''; 
  input.classList.add('is-valid');
  input.classList.remove('is-invalid');
  }
  else {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
  };

})



/*const addButton = document.querySelector('.addButton');
let inputValue = document.querySelector('.input');
const container = document.querySelector('.container');






/*

constructor(itemName){
this.createDiv(itemName);
}
/*
createDiv(itemName){
    let input =document.createElement('input');
    input.value = itemName;
    input.disabled =true;
    input.classList.add('item_input');
    input.type = "text";
    
    let itemBox =doNotTrack.createElement ('div');
    itemBox.classList.add('item')
    let editButton = document.createElement('button');
    editButton.innerHTML = "Edit";
    editButton.classList.add('editButton');

  

    let removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove";
    removeButton.classList.add('removeButton');


    container.appendChild(itemBox);

container.appendChild(input);
container.appendChild(editButton);
container.appendChild(removeButton);
editButton.addEventListener(() => this.edit(input)) ;

}
 
edit(input){
    input.disabled = !input.disabled;

}
removeButton.addEventListener('click',() => this.remove(itemBox));

}
edit(input){
    input.disabled = !input.disabled;

}
remove(item){
    container.removeChild(item);
}


function check (){
    if(input.value !=""){
        new item(input.value);
        input.value = "" ;

    }
}
addButton.addEventListener('click',check);
window.addEventListener('keydown',(e)=>{
    if(e.which ==13){
        check(),
    }
})*/