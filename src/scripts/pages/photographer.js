//Mettre le code JavaScript lié à la page photographer.html
import { getMediasPhotographer } from "../services/api";
import PhotographerPageFactory from "../factories/photographerPageFactory";
import PhotographGaleryFactory from '../factories/PhotographGaleryFactory';
import ContactModal from "../models/ContactModal";
import { validate } from "schema-utils";


async function displayHeaderData(){
    const photographHeader = document.querySelector(".photograph-header");
    const modalPhotographer = document.getElementById('contact_modal');
    const {medias , photograph} = await getMediasPhotographer(getUrlIdParameter());
    const newPhotograph = new PhotographerPageFactory(photograph, "photograph")
    photographHeader.innerHTML += newPhotograph.renderHeader();
    const contactObject = new ContactModal(photograph);
    modalPhotographer.innerHTML += contactObject.renderModal();
    galeryMediaPhotograph(medias, photograph);
    const coeur = document.querySelector('.galery-container')
    coeur.addEventListener('click', function(e){
        incrementLikes(e)
    })
};

async function galeryMediaPhotograph(medias, photograph_){
    const baseUrl = `./assets/photographers/${photograph_.name}`
    const galeryContainer = document.querySelector(".galery-container");
    let totalLikes = 0
    medias.forEach((media ) => {
            const galeryElement = new PhotographGaleryFactory({...media, url:baseUrl})
            galeryContainer.innerHTML += galeryElement.renderGalery()
            totalLikes += galeryElement.likes
    });
    displayLikesTotal(totalLikes, photograph_.price)
};

function getUrlIdParameter(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let id = urlParams.get('id');
    return Number.parseInt(id);
};
displayHeaderData();

function incrementLikes(e){
        const heart = e.target
        if (heart && heart.classList.contains('fa-heart') ){
            const pHeart = heart.parentElement

            let n = Number.parseInt(pHeart.querySelector('.likes-galery').innerHTML)

            if (!pHeart.classList.contains('incremented') ){
                n += 1
            } else{
                n -= 1
            }  
            pHeart.querySelector('.likes-galery').innerHTML = n;   
        }


}
const coeur = document.getElementsByClassName('likes-galery')

function displayLikesTotal( total, price){
    const likeSection = document.getElementById('likes');
    const priceSection = document.getElementById('price');

    likeSection.innerHTML += total + ' <i class="fa-solid fa-heart"></i>';
    priceSection.innerHTML += price + '€ / jour'

}