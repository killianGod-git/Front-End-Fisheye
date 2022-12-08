//Mettre le code JavaScript lié à la page photographer.html
import { getMediasPhotographer } from "../services/api";
import PhotographerPageFactory from "../factories/photographerPageFactory";
import PhotographGaleryFactory from '../factories/PhotographGaleryFactory';
import ContactModal from "../models/ContactModal";
import { validate } from "schema-utils";
import {Lightbox} from "../utils/lightbox"

let baseUrl = '';
let currentPhotograph = '';
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
    const selectField = document.querySelector('#filter-galery');
    selectField.addEventListener('change' , (event) => {
        const result = displaySortMedia(medias, event.target.value)
        displayMedias(result);
    })
    Lightbox.init()
};

async function galeryMediaPhotograph(medias, photograph_){
    baseUrl = `./assets/photographers/${photograph_.name}`
    currentPhotograph = photograph_;
    displayMedias(medias)

    displayLikesTotal(displayMedias(medias), currentPhotograph.price)
};

function displayMedias(medias ){
    let totalLikes = 0
    const galeryContainer = document.querySelector(".galery-container");
    galeryContainer.innerHTML = '';
    medias.forEach((media ) => {
            const galeryElement = new PhotographGaleryFactory({...media, url:baseUrl})
            galeryContainer.innerHTML += galeryElement.renderGalery()
            totalLikes += galeryElement.likes
    });
    return totalLikes
    
}


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
                n += 1;
                pHeart.classList.toggle('incremented')
                heart.classList.toggle('fa-solid')
                heart.classList.toggle('fa-regular')
                UpdateTotalLikes(1)
            } else{
                n -= 1;
                pHeart.classList.toggle('incremented')
                heart.classList.toggle('fa-solid')
                heart.classList.toggle('fa-regular')
                UpdateTotalLikes(-1)
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
function UpdateTotalLikes(likes){
   const likesTotal = document.querySelector('#likes').innerHTML;
   let n = Number.parseInt(likesTotal)
   n += likes
   document.querySelector('#likes').innerHTML = n + ' <i class="fa-solid fa-heart"></i>';
}



 function displaySortMedia(medias , optionsSort){
    switch(optionsSort){
        case 'Popularité':
            medias.sort((a, b) =>{
                return a.likes - b.likes
            })
            break;
        case 'Date':
            medias.sort((a, b) =>{
                const Da = new Date(a.date)
                const Db = new Date(b.date)

                return Da - Db
            })
            break;
        case  'Titre':
            medias.sort((a, b)=>{
                return a.title.localeCompare(b.title) 
            })
            break;
    }
    return medias
 }




//  a faire : Finir lightbox voir problème avec la fonction ligne 48 ( like & prix qui se duplique quand tu change le tri ) 