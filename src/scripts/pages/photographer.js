//Mettre le code JavaScript lié à la page photographer.html
import { getMediasPhotographer } from "../services/api";
import PhotographerPageFactory from "../factories/photographerPageFactory";
import PhotographGaleryFactory from '../factories/PhotographGaleryFactory';
import ContactModal from "../models/ContactModal";
import { validate } from "schema-utils";
import {Lightbox} from "../utils/lightbox"
import { displaySortMedia } from "../utils/sortMedias";
import { displayLikesTotal, incrementLikes } from "../utils/likesFunctions";
import {accessibilityLightbox} from '../utils/lightbox'

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
    coeur.addEventListener('keypress', function(e){
        if (e.key == 'Enter')
        incrementLikes(e)
    })
    const selectField = document.querySelector('#filter-galery');
    selectField.addEventListener('change' , (event) => {
        const result = displaySortMedia(medias, event.target.value)
        displayMedias(result);
    })
    Lightbox.init()
    // ecouteur de la ligthbox
    const container=document.querySelector('.galery-container')

        if(container){
            container.addEventListener('click',(e)=>{
                openLighbox(e, medias)
            })
            container.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    openLighbox(e, medias)
                }
            });
        }
};
function openLighbox(e, medias){
    const mediasUrl = Array.from(document.querySelectorAll('.media'));
    const gallery = mediasUrl.map(mediaUrl => mediaUrl.lastElementChild.currentSrc)
    const Lcontainer=document.querySelector('.lightbox_container')
    const node=e.target.tagName.toLowerCase();
    if(node==='img' || node==='video'){
        const id = e.target.getAttribute('id')
        const data = medias.find(m => m.id == id)
        const dom=document.querySelector('.lightbox')
        dom.classList.add('lightbox_active')
        const initialIndex=gallery.findIndex(media=>media===e.target.src)

        const l=new Lightbox(e.target.src, gallery, Lcontainer, initialIndex, node, data)
    }
    accessibilityLightbox()
}

async function galeryMediaPhotograph(medias, photograph_){
    baseUrl = `./assets/photographers/${photograph_.name}`
    currentPhotograph = photograph_;
    const t = displayMedias(medias)
    displayLikesTotal(t, currentPhotograph.price)
};

function displayMedias(medias ){
    let totalLikes = 0
    const galeryContainer = document.querySelector(".galery-container");
    medias.forEach((media ) => {
        let articlesNode = document.querySelector("#p"+ media.id + "" )
        if (!articlesNode){
            const galeryElement = new PhotographGaleryFactory({...media, url:baseUrl})
            galeryContainer.appendChild(galeryElement.renderGalery())
            totalLikes += galeryElement.likes
        } else {
            galeryContainer.appendChild(articlesNode)
        }
            
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

