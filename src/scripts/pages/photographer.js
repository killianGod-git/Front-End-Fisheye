//Mettre le code JavaScript lié à la page photographer.html
import { getMediasPhotographer } from "../services/api";
import { getOnePhotograph } from "../services/api";
import { photographPageFactory } from "../factories/photographerPageFactory";




async function displayHeaderData(){
    const photographHeader = document.querySelector(".photograph-header");
    const photograph = await getOnePhotograph(getUrlIdParameter());
    const photographModel = photographPageFactory(photograph);
    const displayPhotographHeader = photographModel.displayHeaderPhotographer;
    photographHeader.innerHTML += displayPhotographHeader;
};
async function galeryMediaPhotograph(){
    const media = await getMediasPhotographer(getUrlIdParameter());
    const mediaGalery = media;
    console.log(mediaGalery);
};

function getUrlIdParameter(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let id = urlParams.get('id');
    return Number.parseInt(id);
};
displayHeaderData();
galeryMediaPhotograph();