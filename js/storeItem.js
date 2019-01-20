//setting up variables
const container=document.querySelector(`.item-page-container`);
const footer=document.querySelector(`.footer`);
const pageName=window.location.pathname.split("/").pop().split(".")[0];


//turning the itemArray[] array into HTML
function createStore(array){
  container.innerHTML="";

  //adding content to the list items based off given attributes
  for(let i=0;i<array.length;i++){

    if(array[i].name==pageName){
      //creating the container element
      array[i].element=document.createElement(`div`);
      array[i].element.classList.add(`row`);
      if(i+1==array.length){
        //if the element is the last in the list, it gets this class
        array[i].element.classList.add(`last`);
      }
      //populating the parent .store-item element
      array[i].element.innerHTML=`
      <!-- the thumbnail image -->
      <div class="col-md-12">
        <img class="item-page-image" src="../../images/${array[i].image}">
      </div>
        <!-- the name of the item -->
        <h3 class="item-page-title">${array[i].name}</h3>
        <!-- the item description -->
        <p class="item-page-text">${array[i].desc}</p>`;
      container.appendChild(array[i].element);
    };
    return JSON.stringify(array);
  }
}

//setting up necesarry variables
var savedArray=[];
var timer=""
var obj={};
//loads list from storeContent.json, not run until later
function loadJson(callback){
  var xobj=new XMLHttpRequest();
  xobj.overrideMimeType(`application/json`);
  xobj.open(`GET`, `../../pages/store-content/storeContent.json`, false);
  xobj.onreadystatechange=function(){
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

function init() {
  loadJson(function(response) {
  // Parse JSON string into object
    savedArray=JSON.parse(response).savedStore;
    createStore(savedArray);
  });
}

init();
