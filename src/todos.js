

const todos = () =>{
    const todoContainer = document.querySelector('#todoContainer');
    const todo = document.createElement('div');
    todo.classList.add('todoForm')
    todoContainer.appendChild(todo);
    
}

export default todos;