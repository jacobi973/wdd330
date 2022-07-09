import {makeRequest} from './authHelpers.js';
import Auth from './auth.js';

const auth = new Auth();
console.log('GET');
// makeRequest('login', 'POST', {
//     password: 'user1',
//     email: 'user1@email.com'
//     });


const buttonSelector = document.getElementsByTagName('button')[0];


buttonSelector.addEventListener('click', function() {
    console.log('button clicked')
    auth.login(pullPosts)
});

async function pullPosts(){
    try {
        const data = await makeRequest('posts', 'GET', null, auth.token);
        console.log(data);
        data.forEach(element => {
            console.log('inside for each');
            const makePosts = document.createElement('li');
            makePosts.innerText = element.title;
            document.getElementById('posts').appendChild(makePosts);
        });
    
    } catch (error) {
        console.log(error);
    }
}

const buttonSelectorPosts = document.getElementsByTagName('button')[1];


buttonSelectorPosts.addEventListener('click', createPost);

async function createPost(){

    const title = document.getElementById('title');
    const content = document.getElementById('content');
    const postData = {
      title: title.value,
      content: content.value  
    };
    try {
        const data = await makeRequest('posts', 'POST', postData, auth.token);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
        

}