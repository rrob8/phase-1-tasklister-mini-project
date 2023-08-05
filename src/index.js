document.addEventListener("DOMContentLoaded", () => {
  let field = document.getElementById("create-task-form");
  field.addEventListener('submit', (e) => {  // listen for a submit event on the form element
    e.preventDefault() ; // prevent default action of reloading the page, target submit
   let newEntry = e.target['new-task-description'].value;
    addEntry(newEntry);
    field.reset();
  });
});

  
 
  
  

  


function addEntry (entry) {
let p = document.createElement('p');
let btn = document.createElement('button');
btn.addEventListener('click', handleDelete)
btn.textContent = 'x'
p.textContent = `${entry} `
p.appendChild(btn)
document.getElementById('tasks').appendChild(p)
let drop = document.createElement('select')
p.appendChild(drop)

}

function handleDelete (e) {
e.target.parentNode.remove()
}
