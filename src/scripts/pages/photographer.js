//Mettre le code JavaScript lié à la page photographer.html
import { getMediasPhotographer } from "../services/api";
import { getPhotographers } from "../services/api";
import { photographPageFactory } from "../factories/photographerPageFactory";
console.log(photographPageFactory); 

const queryString = window.location.search;
console.log(queryString);
async function displayHeaderData(){
    const photographHeader = document.querySelector(".photograph-header");
    const photographerModel = photographPageFactory(photographer);
}