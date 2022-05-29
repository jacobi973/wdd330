// import {loadList, saveList, deleteList} from './toDos.js';
// import {getNumberOfTasks} from './toDos.js';

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
    
    document.querySelector('#addNew').addEventListener('keypress', function (event) {
        if (event.keyCode === 13) {
            addNew();
        }
    });

}

function addNew() {
    const newTodo = document.getElementById('addNew').value;
    document.getElementById('addNew').value = '';
    if (newTodo === '') {
        alert('Please enter a task');
        return;
    }
    addHtml(newTodo);
    saveList();
}

function addHtml(newTodo){
    const ul = document.querySelector('ul');
    const item = document.createElement("li");
    item.classList.add('list-group-item');
    item.innerHTML = `<input type="checkbox"><label>${newTodo}</label><button onclick="this.parentNode.remove(); saveList()">X</button>`;
    ul.append(item);
}

function saveList() {
    const ul = document.querySelector('ul');
    const list = ul.innerHTML;
    localStorage.setItem('list', list);
    numberLeft = getNumberOfTasks();
}

function loadList() {
    const ul = document.querySelector('ul');
    const list = localStorage.getItem('list');
    ul.innerHTML = list;
    const label = document.querySelector('label');
    if (label?.innerHTML?.includes('<s>')) {
        const checkboxes = document.querySelectorAll('input[type=checkbox]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
        })
    }
}

function deleteList() {
    localStorage.removeItem('list');
}

function sortAll() {
    const label = document.querySelectorAll('label');
    label.forEach(label => {
        label.parentElement.style.visibility = 'visible';
    });
}

function sortActive() {

    const label = document.querySelectorAll('label');
    label.forEach(label => {
        if (label?.innerHTML?.includes('<s>')) {
            label.parentElement.style.visibility = 'hidden';
        } else {
            label.parentElement.style.visibility = 'visible';
        }
    });
}

function sortCompleted() {
    const label = document.querySelectorAll('label');
    label.forEach(label => {
        if (label?.innerHTML?.includes('<s>')) {
            label.parentElement.style.visibility = 'visible';
        } else {
            label.parentElement.style.visibility = 'hidden';
        }
    });

}

function getNumberOfTasks() {
    const label = document.querySelectorAll('label');
    let number = 0;
    label.forEach(label => {
        if (!label?.innerHTML?.includes('<s>')) {
            number++;
        }
    });
    document.querySelector('#numberLeft').innerHTML = `Tasks Left ${number}`;
}