const form = document.querySelector(".add");
const list = document.querySelector(".list-group ");
const input = document.querySelector(".form-control");

const generateTemplate = (todo) => {
    const html= `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html;

}




form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = form.add.value.trim()
  if(todo.length){
    generateTemplate(todo);  
    addForm.reset()
  }
});
