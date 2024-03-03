const btn = document.querySelector('button')
const ul = document.querySelector('ul')

btn.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = "new todo"
    ul.appendChild(li)
})

ul.addEventListener('click', (e) => {
    ul.removeChild(e.target)
})