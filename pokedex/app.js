import {
    pokemon,
    pokemonTypes
} from "./pokemom.js";

import {
    autocomplete,
    capitalize
} from "./util.js";

// DOM Objects
const mainScreen = document.querySelector('.main-screen');
const pokeName = document.querySelector('.poke-name');
const pokeId = document.querySelector('.poke-id');
const pokeFrontImage = document.querySelector('.poke-front-image');
const pokeBackImage = document.querySelector('.poke-back-image');
const pokeTypeOne = document.querySelector('.poke-type-one');
const pokeTypeTwo = document.querySelector('.poke-type-two');
const pokeWeight = document.querySelector('.poke-weight');
const pokeHeight = document.querySelector('.poke-height');
const pokeListItems = document.querySelectorAll('.list-item');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const saveButton = document.querySelector('.save-button');
const deleteButton = document.querySelectorAll('.delete-button');
const deleteTeamButton = document.querySelector('.delete-team-button');
const addButton = document.querySelector('.add-button');
const searchButton = document.querySelector('.search-button');
const teamMemberImage = document.querySelectorAll('.teamImage');
const teamMemberName = document.querySelectorAll('.teamName');
const bottomContainer = document.querySelectorAll('.bottom-container__black');

let prevUrl = null;
let nextUrl = null;


// Functions
function resetScreen() {
    mainScreen.classList.remove('hide');
    for (const type of pokemonTypes) {
        mainScreen.classList.remove(type);
    }
}

function fetchPokeList(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const {
                results,
                previous,
                next
            } = data;
            prevUrl = previous;
            nextUrl = next;

            for (let i = 0; i < pokeListItems.length; i++) {
                const pokeListItem = pokeListItems[i];
                const resultData = results[i];

                if (resultData) {
                    const {
                        name,
                        url
                    } = resultData;
                    const urlArray = url.split('/');
                    const id = urlArray[urlArray.length - 2];
                    pokeListItem.textContent = id + '. ' + capitalize(name);
                } else {
                    pokeListItem.textContent = '';
                }
            }
        });
}

function fetchPokeData(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => {
            resetScreen();

            const dataTypes = data['types'];
            const dataFirstType = dataTypes[0];
            const dataSecondType = dataTypes[1];
            pokeTypeOne.textContent = capitalize(dataFirstType['type']['name']);
            if (dataSecondType) {
                pokeTypeTwo.classList.remove('hide');
                pokeTypeTwo.textContent = capitalize(dataSecondType['type']['name']);
            } else {
                pokeTypeTwo.classList.add('hide');
                pokeTypeTwo.textContent = '';
            }
            mainScreen.classList.add(dataFirstType['type']['name']);

            pokeName.textContent = capitalize(data['name']);
            pokeId.textContent = '#' + data['id'].toString().padStart(3, '0');
            pokeWeight.textContent = data['weight'];
            pokeHeight.textContent = data['height'];
            pokeFrontImage.src = data['sprites']['front_default'] || '';
            pokeBackImage.src = data['sprites']['back_default'] || '';
        })
        .catch(err => window.alert('no pokemon found'));

}

function handleLeftButtonClick() {
    if (prevUrl) {
        fetchPokeList(prevUrl);
    }
}

function handleRightButtonClick() {
    if (nextUrl) {
        fetchPokeList(nextUrl);
    }
}

function handleAddButtonClick(event) {
    for (let i = 0; i < teamMemberImage.length; i++) {
        if (teamMemberImage[i].src === window.location.href) {
            teamMemberImage[i].src = pokeFrontImage.src;
            teamMemberName[i].textContent = pokeName.textContent;
            teamMemberName[i].setAttribute('id', parseInt(pokeId.textContent.replace('#', '')));
            bottomContainer[i].classList.remove('hide');
            bottomContainer[i].classList.add(pokeTypeOne.textContent.toLocaleLowerCase());
            break;
        }
    }
}

function handleSaveButtonClick() {
    for (let i = 0; i < teamMemberImage.length; i++) {
        if (teamMemberImage[i].src === window.location.href) {
            alert('Please add 6 pokemon to your team');
            return;
        }
    }
    const data = [];
    for (let i = 0; i < teamMemberName.length; i++) {
        data.push({
            name: teamMemberName[i].textContent,
            id: teamMemberName[i].getAttribute('id'),
            image: teamMemberImage[i].src,
            type: bottomContainer[i].classList[1]
        });
    }
    localStorage.setItem('pokeTeam', JSON.stringify(data));
}

function handleDeleteButtonClick(event) {
    event.target.parentNode.firstChild.nextSibling.textContent = '';
    event.target.parentNode.nextElementSibling.querySelector('.teamImage').src = ''
    event.target.parentNode.parentNode.parentNode.classList.add('hide');
    // remove type from bottom container
    event.target.parentNode.parentNode.parentNode.classList.remove(event.target.parentNode.parentNode.parentNode.classList[1]);

}

function handleDeleteTeamButtonClick() {
    for (let i = 0; i < teamMemberImage.length; i++) {
        if (condition) {
            teamMemberImage[i].src = '';
            teamMemberName[i].textContent = '';
            teamMemberName[i].setAttribute('id', '');
            bottomContainer[i].classList.add('hide');
            bottomContainer[i].classList.remove(bottomContainer[i].classList[1]);
        }
    }
    localStorage.removeItem('pokeTeam');
}

function handleSearchButtonClick() {
    const searchInput = document.querySelector('#myInput');
    const searchValue = searchInput.value;
    try {
        if (searchValue) {
            fetchPokeData(searchValue.toLowerCase());
        }
    } catch (error) {
        alert('No pokemon found');

    }
}


function handleListItemClick(e) {
    if (!e.target)
        return;

    const listItem = e.target;
    if (!listItem.textContent)
        return;

    const id = listItem.textContent.split('.')[0];
    fetchPokeData(id);
}

function getData() {
    const data = localStorage.getItem('pokeTeam');
    const dataParse = JSON.parse(data);
    if (data) {
        for (let i = 0; i < dataParse.length; i++) {
            teamMemberImage[i].src = dataParse[i].image;
            teamMemberName[i].textContent = dataParse[i].name;
            teamMemberName[i].setAttribute('id', dataParse[i].id);
            bottomContainer[i].classList.remove('hide');
            bottomContainer[i].classList.add(dataParse[i].type);
        }
        return JSON.parse(data);
    }
    return [];
}



// adding event listeners
leftButton.addEventListener('click', handleLeftButtonClick);
rightButton.addEventListener('click', handleRightButtonClick);
saveButton.addEventListener('click', handleSaveButtonClick);
addButton.addEventListener('click', handleAddButtonClick);
deleteButton.forEach(btn => {
    btn.addEventListener('click', handleDeleteButtonClick);
});
deleteTeamButton.addEventListener('click', handleDeleteTeamButtonClick);
searchButton.addEventListener('click', handleSearchButtonClick);
for (const pokeListItem of pokeListItems) {
    pokeListItem.addEventListener('click', handleListItemClick);
}
// Gets your Pokemon team for local storage
getData();
// Autocompletes the form with the Pokemon name
autocomplete(document.getElementById("myInput"), pokemon);
// initialize App
fetchPokeList('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');