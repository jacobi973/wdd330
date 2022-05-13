let count = 0
const table = document.querySelector('table')
table.addEventListener('click', changeShape)

function changeShape(cell){
    if (cell.target.innerHTML === 'X') {
        cell.target.innerHTML = 'O';
    } else if(cell.target.innerHTML === 'O'){
        cell.target.innerHTML = 'X';;
    }else{
        cell.target.innerHTML = 'X';;
        count +=1;
    }
    if (count === 9) {
        document.getElementById('tie').innerHTML = "its a tie!"
    }
}

function reset(){
    let tdArray = document.getElementsByTagName('td')
    for (let i = 0; i < tdArray.length; i++) {
        document.getElementsByTagName('td')[i].innerHTML = '';
    }
    count = 0;
}