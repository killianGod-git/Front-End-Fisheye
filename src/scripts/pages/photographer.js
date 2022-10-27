//Mettre le code JavaScript lié à la page photographer.html
import { getMediasPhotographer } from "../services/api";
import PhotographerPageFactory from "../factories/photographerPageFactory";
import PhotographGaleryFactory from '../factories/PhotographGaleryFactory';


async function displayHeaderData(){
    const photographHeader = document.querySelector(".photograph-header");
    const {medias , photograph} = await getMediasPhotographer(getUrlIdParameter());
    const newPhotograph = new PhotographerPageFactory(photograph, "photograph")
    photographHeader.innerHTML += newPhotograph.renderHeader()
    galeryMediaPhotograph(medias);
};

async function galeryMediaPhotograph(medias){
    medias.forEach((media) => {
        const galeryContainer = document.querySelector(".galery-container");
        if (media['video']){
            const galeryElement = new PhotographGaleryFactory(media, "video")
            galeryContainer.innerHTML += galeryElement.renderGalery()
        } else if (media['image']){
            const galeryElement = new PhotographGaleryFactory(media, "image")
            galeryContainer.innerHTML += galeryElement.renderGalery()
        }

    });
};

function getUrlIdParameter(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let id = urlParams.get('id');
    return Number.parseInt(id);
};
displayHeaderData();