const question = [" What is your name?", "What is your quest?", "What is the airspeed velocity of an unlaiden swallow?"]
for (let i = 0; i < question.length; i++) {
    const answer = prompt(`To cross the bridge of death, you must anwser these questions three! (hopefully you've seen monty python) ${question[i]}`);
    alert(`You answered ${answer}`);
}

alert('Fine off you go');

function arguments(){
    return arguments;
}
arguments('ouzza', 1, 2)