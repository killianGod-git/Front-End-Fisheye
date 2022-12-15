import Image from "../models/image"
import Video from "../models/video"
export class ImageLightbox {
    constructor(data){
        this.title = data.firstElementChild.getAttribute("alt")
        this.url = data.lastElementChild.currentSrc
    }
    renderLightbox(){
        const singleGaleryElement = `
        <button class="lightbox_close">fermer</button>
        <a href="#" class="lightbox_prev">précédent</a>
        <br>
        <a href="#" class="lightbox_next">suivant</a>
        <div class="lightbox_container">
        <img src="${this.url}" alt="${this.title}" >
        <h2 clas="lightbox-title">${this.title}</h2>
        </div>
        `

        return singleGaleryElement
    }
}
export class VideoLightbox {
    constructor(data){
        this.title = data.firstElementChild.getAttribute("alt")
        this.url = data.lastElementChild.currentSrc
    }
    renderLightbox(){
        const singleGaleryElement = `
        <button class="lightbox_close">fermer</button>
        <a href="#" class="lightbox_prev">précédent</a>
        <br>
        <a href="#" class="lightbox_next">suivant</a>
        <div class="lightbox_container">
        <video controls autoplay> <source src="${this.url}" type="video/mp4" >
        </div>
        `
        return singleGaleryElement
    }
}

export class FactoryLightbox {
    constructor (data){

        console.log(data.lastElementChild.currentSrc)
        if (data.lastElementChild.currentSrc.endsWith('.jpg')){
            return new ImageLightbox(data)

        }
        else if(data.lastElementChild.currentSrc.endsWith('.mp4')){
            console.log('toto')
            return new VideoLightbox(data)
            
        }
        else{
            throw 'erreur'
        }
    }
}


    
