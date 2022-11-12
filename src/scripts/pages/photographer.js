//Mettre le code JavaScript lié à la page photographer.html
import { getMediasPhotographer } from "../services/api";
import PhotographerPageFactory from "../factories/photographerPageFactory";
import PhotographGaleryFactory from '../factories/PhotographGaleryFactory';
import ContactModal from "../models/ContactModal";


async function displayHeaderData(){
    const photographHeader = document.querySelector(".photograph-header");
    const modalPhotographer = document.getElementById('contact_modal');
    const {medias , photograph} = await getMediasPhotographer(getUrlIdParameter());
    const newPhotograph = new PhotographerPageFactory(photograph, "photograph")
    photographHeader.innerHTML += newPhotograph.renderHeader();
    const contactObject = new ContactModal(photograph);
    modalPhotographer.innerHTML += contactObject.renderModal();
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

function incrementLikes(){
    const coeur = document.getElementsByClassName('coeur')
    coeur.addEventListener('click', function (){
        if (!coeur.className == 'increment'){
            coeur.classList.toggle('increment')
        } else {
            coeur.classList.toggle('increment')
        }
    })
}

// const likesNumber = document.getElementsByClassName('likes-galery')
// console.log(likesNumber)
// for (const singleLike of likesNumber){
//     console.log(singleLike)
// }