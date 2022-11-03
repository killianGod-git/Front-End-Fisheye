//Mettre le code JavaScript lié à la page photographer.html
import { getMediasPhotographer } from "../services/api";
import PhotographerPageFactory from "../factories/photographerPageFactory";
import PhotographGaleryFactory from '../factories/PhotographGaleryFactory';


async function displayHeaderData(){
    const photographHeader = document.querySelector(".photograph-header");
    const modalPhotographer = document.getElementById('contact_modal');
    const {medias , photograph} = await getMediasPhotographer(getUrlIdParameter());
    const newPhotograph = new PhotographerPageFactory(photograph, "photograph")
    photographHeader.innerHTML += newPhotograph.renderHeader();
    // modalPhotographer.innerHTML += newPhotograph.renderModal();
    galeryMediaPhotograph(medias, photograph);
};

async function galeryMediaPhotograph(medias, photograph_){
    const baseUrl = `./assets/photographers/${photograph_.name}`
    const galeryContainer = document.querySelector(".galery-container");
    medias.forEach((media ) => {
            const galeryElement = new PhotographGaleryFactory({...media, url:baseUrl})
            galeryContainer.innerHTML += galeryElement.renderGalery()

    });
};

function getUrlIdParameter(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let id = urlParams.get('id');
    return Number.parseInt(id);
};
displayHeaderData();