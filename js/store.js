import {createStore, savedArray} from "/js/createItems.js";

const save=document.querySelector(`#save`);


save.addEventListener(`click`, function(event){
  if(savedArray){
    const staticStoreArray=JSON.parse(savedArray);
    createStore(staticStoreArray);
  }
})
