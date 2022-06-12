// Example of using Classes and modules to organize the code needed to render our list of hikes. Not using MVC here.

import { getCurDate } from "./comments.js";


let commentArray = [];

//create an array of hikes
console.log(getCurDate());
const hikeList = [
    {
      name: "Bechler Falls",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description:
        "Beautiful short hike along the Bechler river to Bechler Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.",
      test() {
         alert('it is a test')
      }
    },
    {
      name: "Teton Canyon",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description: "Beautiful short (or long) hike through Teton Canyon.",
      directions:
        "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Stateline Road for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.",
        test() {
           alert('it is a test')
        }
    },
    {
      name: "Denanda Falls",
      imgSrc: "falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "7 miles",
      difficulty: "Moderate",
      description:
        "Beautiful hike through Bechler meadows river to Denanda Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.",
        test() {
           alert('it is a test')
        }
    }
  ];
  
  const imgBasePath = "//byui-cit.github.io/cit261/examples/";
  //on load grab the array and insert it into the page on load
  
  export default class Hikes {
    
    constructor(elementId) {
      this.parentElement = document.getElementById(elementId);
      // we need a back button to return back to the list. This will build it and hide it. When we need it we just need to remove the 'hidden' class
      this.backButton = this.buildBackButton();
    }
    // why is this function necessary?  hikeList is not exported, and so it cannot be seen outside of this module. I added this in case I ever need the list of hikes outside of the module. This also sets me up nicely if my data were to move. I can just change this method to the new source and everything will still work if I only access the data through this getter.
    getAllHikes() {
      return hikeList;
    }

    getAllComments() {
      return commentArray;
    }

    renderCommentList() {

    }

    filterCommentsByName() {

    }

    // For the first stretch we will need to get just one hike.
    getHikeByName(hikeName) {
      return this.getAllHikes().find(hike => hike.name === hikeName);
    }
    //show a list of hikes in the parentElement
    showHikeList() {
      //const hikeListElement = document.getElementById("hikes");
      this.parentElement.innerHTML = ''
      //hikeListElement.innerHTML = "";
      renderHikeList(this.parentElement, this.getAllHikes());
    }
    // show one hike with full details in the parentElement
    showOneHike(hikeName) {
      const hike = this.getHikeByName(hikeName);
      this.parentElement.innerHTML = '';
      this.parentElement.appendChild(renderOneHikeFull(hike));
      this.backButton.classList.remove('hidden');
    }
    // in order to show the details of a hike ontouchend we will need to attach a listener AFTER the list of hikes has been built. The function below does that.
    addHikeListener() {
      // We need to loop through the children of our list and attach a listener to each, remember though that children is a nodeList...not an array. So in order to use something like a forEach we need to convert it to an array.
      const childrenArray = Array.from(this.parentElement.children);
      childrenArray.forEach(child => {
      child.addEventListener('touchend', e => {
        this.showOneHike(e.currentTarget.dataset.name);
        });
      });      
    }
    buildBackButton() {
      const backButton = document.createElement("button");
  
      return backButton;
    }
  }
  // methods responsible for building HTML.  Why aren't these in the class?  They don't really need to be, and by moving them outside of the exported class, they cannot be called outside the module...they become private.
  function renderHikeList(parent, hikes) {
    hikes.forEach(hike => {
      parent.appendChild(renderOneHikeLight(hike));
    });
  }
  function renderOneHikeLight(hike) {    
    const item = document.createElement("li");
    item.innerHTML = ` <h2>${hike.name}</h2>
    <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
    <div class="info">
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
            <button class="show-btn">Comments</button>
            <div class="f-hidden">
              <h4>Comments</h4>
                <div class='comment-store'>
                </div>
              <div>
              <form class='f-main'>
              <textarea id="" name="new-com" rows="4" cols="50"></textarea>
                <button class="comment-btn">+ Add Comment</button>
              </form>
              </div>
            </div>
    </div>`;
    return item;
  }
  function renderOneHikeFull(hike) {
    const item = document.createElement("li");
  
    return item;
  }

//   document.addEventListener('click', function(e){
//     if (!e.target.matches('.show-btn')) return;
//     else{
//       debugger;
//       e.target.nextElementSibling.classList.toggle('f-active');
//     }
// });

document.addEventListener('click', function(e){
  if (e.target.matches('.show-btn')){
    e.target.nextElementSibling.classList.toggle('f-active');
  }
  else if (e.target.matches('.comment-btn')){
    debugger;
    e.preventDefault();
    const newComment = {
      name: e.target.parentElement[0].value,
      content: e.target.parentElement[0].value,
      date: getCurDate()
    };
    let viewCom = document.createElement('div');
    viewCom.className = 'wrap-com';
    viewCom.innerHTML = '<span>'+ newComment.date +'</span><span>'+ newComment.content +'</span>';
    e.target.parentElement.parentElement.parentElement.childNodes[3].appendChild(viewCom);
    commentArray.push(newComment);
    renderCommentList(commentArray, e.target.parentElement);
  }
  else{
    return;
  }
});

// function renderCommentList(commentArray, form) {
//   debugger;
//   form.parentElement.parentElement.childNodes[2].textContent = 'Hello';
// }

  // const AddBtn = document.getElementsByClassName('comment-btn');
  // AddBtn.ontouchend
  //.ontouchend = function() {

 // }
