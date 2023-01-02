//Mettre le code JavaScript lié à la page photographer.html
import { getMediasPhotographer } from "../services/api";
import PhotographerPageFactory from "../factories/photographerPageFactory";
import PhotographGaleryFactory from '../factories/PhotographGaleryFactory';
import ContactModal from "../models/ContactModal";
import { validate } from "schema-utils";
import {Lightbox} from "../utils/lightbox"
import { displaySortMedia } from "../utils/sortMedias";
import { displayLikesTotal, incrementLikes } from "../utils/likesFunctions";

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
    // ecouteur de la ligthbox
    const container=document.querySelector('.galery-container')

        if(container){
            container.addEventListener('click',(e)=>{
                const mediasUrl = Array.from(document.querySelectorAll('.media'));
                const gallery = mediasUrl.map(mediaUrl => mediaUrl.lastElementChild.currentSrc)
                const Lcontainer=document.querySelector('.lightbox_container')
                const node=e.target.tagName.toLowerCase();
                if(node==='img' || node==='video'){
                    const dom=document.querySelector('.lightbox')
                    dom.classList.add('lightbox_active')
                    const initialIndex=gallery.findIndex(media=>media===e.target.src)
                    console.log(initialIndex)
                    const l=new Lightbox(e.target.src, gallery, Lcontainer, initialIndex, node)
                }
            })
        }
};

async function galeryMediaPhotograph(medias, photograph_){
    baseUrl = `./assets/photographers/${photograph_.name}`
    currentPhotograph = photograph_;
    const t = displayMedias(medias)
    displayLikesTotal(t, currentPhotograph.price)
};

function displayMedias(medias ){
    let totalLikes = 0
    const galeryContainer = document.querySelector(".galery-container");
    // galeryContainer.innerHTML = '';
    medias.forEach((media ) => {
        console.log(media.id)
        let articlesNode = document.querySelector("#p"+ media.id + "" )
        console.log(articlesNode)
        if (!articlesNode){
            const galeryElement = new PhotographGaleryFactory({...media, url:baseUrl})
            galeryContainer.appendChild(galeryElement.renderGalery())
            totalLikes += galeryElement.likes
        } else {
            console.log("rest")
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

