const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add'); //como es una clase la llamo con punto
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');


addBtn.addEventListener("click", (e)=>{
    e.preventDefault(); //frenamos la recarga

    const text = input.value; //guardamos en la variable texto el contenido del input
    
    if(text !== ""){
        const li = document.createElement("li");
        const p = document.createElement("p");

        p.textContent = text;

        li.appendChild(p);

        ul.appendChild(li);

        li.appendChild(addEliminarBtn());

        input.value = "";
        empty.style.display = "none"


        
    }

});

function addEliminarBtn(){
    const eliminarBtn = document.createElement("button");


    eliminarBtn.textContent = "X";
    eliminarBtn.className = "btn-delete";

    eliminarBtn.addEventListener("click", (e)=>{
        const item = e.target.parentElement;

        ul.removeChild(item);

        const items = document.querySelectorAll("li");

        if(items.length === 0){
            empty.style.display = "block";
        }
    });

    return eliminarBtn;

}