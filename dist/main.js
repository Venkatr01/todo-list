(()=>{"use strict";document.querySelector("#addtodoBtn").addEventListener("click",(()=>{(()=>{const e=document.querySelector("#todoContainer"),t=document.createElement("div");t.classList.add("todoForm"),e.appendChild(t)})(),(()=>{const e=document.createElement("div"),t=document.querySelector(".todoForm");t.appendChild(e),t.innerHTML='<label for="title">Title:</label>\n    <input type="text" name="" id="title"><br>\n    <label for="description">Desc: </label><br>\n    <textarea name="description" id="description" cols="30" rows="5"></textarea><br>\n    <label for="birthday">Birthday:</label>\n    <input type="date" id="birthday" name="birthday">'})()}))})();