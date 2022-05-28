import {loadList, saveList, deleteList} from './ls.js';
import {getNumberOfTasks} from './utilities.js';

loadList();
getNumberOfTasks();
window.onload = function () {
    const listholder = document.querySelector('.listHolder');
    listholder.addEventListener('click', function (event) {
        var checkboxes = document.querySelectorAll('input[type=checkbox]');
        for (var checkbox of checkboxes) {
            checkbox.addEventListener('change', function (event) {
                let wording = event.target.nextElementSibling.innerText;
                if (event.target.checked) {
                    event.target.nextElementSibling.innerHTML = `<s>${wording}</s>`;
                    saveList();
                } else {
                    wording = event.target?.nextElementSibling?.innerHTML.replace(/<s>|<\/s>/g, '');
                    event.target.nextElementSibling.innerHTML = wording;
                    saveList();
                }
            });
        }
    }, false);
}

export function addNew() {
    const newTodo = document.getElementById('addNew').value;
    const ul = document.querySelector('ul');
    const item = document.createElement("li");
    item.classList.add('list-group-item');
    item.innerHTML = `<input type="checkbox"><label>${newTodo}</label><button onclick="this.parentNode.remove(); saveList()">X</button>`;
    ul.append(item);
    saveList();
}