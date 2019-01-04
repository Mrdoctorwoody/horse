import {createStore} from "/js/createItems.js";
//setting up necesarry variables
var savedArray=[];
var timer=""
var obj={};
//loads list from storeContent.json, not run until later
function loadJson(callback){
  var xobj=new XMLHttpRequest();
  xobj.overrideMimeType(`application/json`);
  xobj.open(`GET`, `../pages/store-content/storeContent.json`, false);
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

console.log(savedArray);

export {savedArray};
