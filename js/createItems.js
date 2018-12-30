//setting up variables
const container=document.querySelector(`.store`);
const footer=document.querySelector(`.footer`);
//input variables - only applicable to editor
const nameInput=document.querySelector(`#name`);
const enter=document.querySelector(`button`);
const descInput=document.querySelector(`#desc`);
const thumbInput=document.querySelector(`#thumb`);

var itemArray=[];
var savedArray=undefined;

function editor(){
  //editor form event listeners
  enter.addEventListener(`click`, function(event){
    //when enter button is clicked
    itemArray.push({
      //push these things to an array in the form of one object
      name:nameInput.value,
      desc:descInput.value,
      image:thumbInput.value.split("\\")[thumbInput.value.split("\\").length-1]
    });
    //reset values of inputs
    nameInput.value="";
    descInput.value="";
    thumbInput.value="";

    createStore(itemArray);
  })
  save.addEventListener(`click`, function(event){
    saveStore(itemArray);
  })
}
editor();
//turning the itemArray[] array into HTML
function createStore(array){
  container.innerHTML="";

  //adding content to the list items based off given attributes
  for(let i=0;i<array.length;i++){
    //creating the container element
    array[i].element=document.createElement(`div`);
    array[i].element.classList.add(`row`, `store-item`);
    if(i+1==array.length){
      //if the element is the last in the list, it gets this class
      array[i].element.classList.add(`last`);
    }
    //populating the parent .store-item element
    array[i].element.innerHTML=`
    <div class="col-md-4">
      <!-- the thumbnail image -->
      <img class="item-thumbnail img-fluid" src="../images/${array[i].image}">
    </div>
    <div class="col-md-8 store-text-contianer">
      <!-- the name of the item -->
      <h3>
        <a class="store-link" href="store-items/${array[i].name}.html">${array[i].name}</a>
      </h3>
      <!-- the item description -->
      <p>${array[i].desc}</p>
    </div>`;
    container.appendChild(array[i].element);
  }
  return JSON.stringify(array);
}

//turning the itemArray into JSON
function saveStore(array){
  if(itemArray[0]!=undefined){
    savedArray=JSON.stringify(itemArray);
  }
}

export {createStore, savedArray};
