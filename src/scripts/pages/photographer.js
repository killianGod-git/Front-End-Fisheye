//Mettre le code JavaScript lié à la page photographer.html
import { getMediasPhotographer } from "../services/api";
import PhotographHeaderFactory from "../factories/photographerPageFactory";
import PhotographHeaderTemplate  from "../templates/photographTemplate";
import  PhotographModel  from "../models/photograph";


async function displayHeaderData(){
    const photographHeader = document.querySelector(".photograph-header");
    const {medias , photograph} = await getMediasPhotographer(getUrlIdParameter());
    const photographModel2 = new PhotographHeaderFactory(photograph, "photograph")
    // const displayPhotographHeader = photographModel2.displayHeaderPhotographer();
    console.log(photographModel2);
    photographHeader.innerHTML += displayPhotographHeader;
    galeryMediaPhotograph(medias);
};

async function galeryMediaPhotograph(media){
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