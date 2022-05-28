// import { getNumberOfTasks } from "./utilities";
export function saveList() {
    const ul = document.querySelector('ul');
    const list = ul.innerHTML;
    localStorage.setItem('list', list);
    numberLeft = getNumberOfTasks();
}

export function loadList(){
    const ul = document.querySelector('ul');
    const list = localStorage.getItem('list');
    ul.innerHTML = list;
    const label = document.querySelector('label');
    if (label?.innerHTML?.includes('<s>')){
        const checkboxes = document.querySelectorAll('input[type=checkbox]');
       checkboxes.forEach(checkbox => {
              checkbox.checked = true;
       })
    }
}

export function deleteList(){
    localStorage.removeItem('list');
}