//setting up constants
const container=document.querySelector(`.container-fluid`);
const footer=document.querySelector(`.footer`);

//example items, will eventually be pulled from elsewhere
var item1={
  name:"matt",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image:"../images/horse-placeholder.png"
};
var item2={
  name:"horse 2",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image:"../images/horse-placeholder.png"
};
//populating an array with the items
var itemArray=[item1, item2];

function createElements(){
  //adding content to the list items based off given attributes
  for(let i=0;i<itemArray.length;i++){
    //creating the container element
    itemArray[i].element=document.createElement(`div`);
    itemArray[i].element.classList.add(`row`, `store-item`);
    if(i+1==itemArray.length){
      //if the element is the last in the list, it gets this class
      itemArray[i].element.classList.add(`last`);
    }
    //populating the parent .store-item element
    itemArray[i].element.innerHTML=`
    <div class="col-md-4">
      <!-- the thumbnail image -->
      <img class="item-thumbnail img-fluid" src="${itemArray[i].image}">
    </div>
    <div class="col-md-8 store-text-contianer">
      <!-- the name of the item -->
      <h3>
        <a class="store-link" href="store-items/${itemArray[i].name}.html">${itemArray[i].name}</a>
      </h3>
      <!-- the item description -->
      <p>${itemArray[i].description}</p>
    </div>`;

    container.insertBefore(itemArray[i].element, footer);
  }

}

export {createElements};
