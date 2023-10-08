import todos from "./todos";
import todoForm from "./todoForm";

const addtodoBtn = document.querySelector('#addtodoBtn');
addtodoBtn.addEventListener('click',()=>{
    todos();
    todoForm();
})