const form = document.querySelector(".add");
const list = document.querySelector(".list-group ");
const input = document.querySelector(".add");
const search = document.querySelector(".search input")


function addingTemplate(todoName){
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todoName}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>`;

    list.innerHTML += html
  
} 



form.addEventListener('submit',function(e){
  e.preventDefault()
  const todo = form.add.value.trim()
  if(todo.length){
    addingTemplate(todo);
    form.reset()
  }
  

})

//delete todos
list.addEventListener('click', function(e){
  if(e.target.classList.contains("delete")){
    e.target.parentElement.remove()
  }
})


function filter(term){
  Array.from(list.children)
  .filter((todo) => !todo.textContent.toLowerCase().includes(term))
  .forEach((todo) => todo.classList.add("filtered"))

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"))
}



search.addEventListener('keyup', function(){
  const term = search.value.trim().toLowerCase()
  filter(term)
})


