import todos from "./todos";

const todoForm = ()=>{
    const todoTitle = document.createElement('div');
    const todoForm = document.querySelector('.todoForm');
    todoForm.appendChild(todoTitle);
    // todoTitle.textContent = "Title";
    
    todoForm.innerHTML = `<label for="title">Title:</label>
    <input type="text" name="" id="title"><br>
    <label for="description">Desc: </label><br>
    <textarea name="description" id="description" cols="30" rows="5"></textarea><br>
    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday">`
}
export default todoForm;