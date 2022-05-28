export function sortAll(){
    const label = document.querySelectorAll('label');
    label.forEach(label => {
        label.parentElement.style.visibility = 'visible';
    });
}
export function sortActive(){

    const label = document.querySelectorAll('label');
    label.forEach(label => {
        if (label?.innerHTML?.includes('<s>')){
            label.parentElement.style.visibility = 'hidden';
        } else{
            label.parentElement.style.visibility = 'visible';
        }
    });
}
export function sortCompleted(){
    const label = document.querySelectorAll('label');
    label.forEach(label => {
        if (label?.innerHTML?.includes('<s>')){
            label.parentElement.style.visibility = 'visible';
        } else{
            label.parentElement.style.visibility = 'hidden';
        }
    });

}
export function getNumberOfTasks(){
    const label = document.querySelectorAll('label');
    let number = 0;
    label.forEach(label => {
        if (!label?.innerHTML?.includes('<s>')){
            number++;
        }
    });
    document.querySelector('#numberLeft').innerHTML = `Tasks Left ${number}`;
}