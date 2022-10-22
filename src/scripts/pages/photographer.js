//Mettre le code JavaScript lié à la page photographer.html
import { getMediasPhotographer } from "../services/api";
import PhotographerPageFactory from "../factories/photographerPageFactory";
import  PhotographModel  from "../models/photograph";


async function displayHeaderData(){
    const photographHeader = document.querySelector(".photograph-header");
    const {medias , photograph} = await getMediasPhotographer(getUrlIdParameter());
    const newPhotograph = new PhotographerPageFactory(photograph, "photograph")
    console.log(photograph);
    photographHeader.innerHTML += newPhotograph.renderHeader()
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