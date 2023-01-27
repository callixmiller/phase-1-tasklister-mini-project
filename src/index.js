const form = () => document.querySelector('#create-task-form')

document.addEventListener("DOMContentLoaded", () => {
  form().addEventListener('submit', handleSubmit)
});

function handleSubmit(e) {
  e.preventDefault()

  const toDoText = document.querySelector('#new-task-description').value
  if (toDoText === "") {
    alert("Task needs to be filled out")
    return false
  }
  const li = document.createElement('li')
  
  const btn = document.createElement('button')
  
  const dueDate = document.querySelector('#dueDate').value
  if (dueDate === "") {
    alert("Missing a due date")
    return false
  }

  const priority = document.querySelector('#prioritySelector').value
  if (priority === "--") {
    alert("Priority level needs indicated")
    return false
  }
  
  const color = e.target.prioritySelector.value
  
  btn.addEventListener('click', handleDelete)
  
  btn.textContent = 'x'
  
  li.textContent = `${toDoText} ${dueDate} `
  
  tasks.appendChild(li)
  
  li.className = priority
  
  li.appendChild(btn)

  li.style.color = color
  
  form().reset()
}

function handleDelete(e) {
  e.target.parentNode.remove()
}