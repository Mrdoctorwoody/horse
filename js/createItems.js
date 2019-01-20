//setting up variables
const container=document.querySelector(`.store`);
const footer=document.querySelector(`.footer`);


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
    if(i%2==0){
      array[i].element.classList.add(`odd`);
    }
    //populating the parent .store-item element
    array[i].element.innerHTML=`
    <div class="col-md-4">
      <!-- the thumbnail image -->
      <img class="item-thumbnail " src="../images/${array[i].image}">
    </div>
    <div class="col-md-8 store-text-container">
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

export {createStore};
