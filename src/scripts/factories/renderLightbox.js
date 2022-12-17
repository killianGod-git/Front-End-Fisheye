import Image from "../models/image"
import Video from "../models/video"
export class MediasLightbox {
    constructor( buildDOM){
        this.buildDOM = buildDOM
    }
    initevent(){
        this.buildDOM()
    }
}
export class ImageLightbox extends MediasLightbox{
    constructor(data, buildDOM){
        super(buildDOM)
        this.title = data.firstElementChild.getAttribute("alt")
        this.url = data.lastElementChild.currentSrc
    }
    renderLightbox(){
        const singleLightboxElement = `
        <button class="lightbox_close">fermer</button>
        <a href="#" class="lightbox_prev">précédent</a>
        <br>
        <a href="#" class="lightbox_next">suivant</a>
        <div class="lightbox_container">
        <img src="${this.url}" alt="${this.title}" >
        <h2 clas="lightbox-title">${this.title}</h2>
        </div>
        `

        return singleLightboxElement
    }
}
export class VideoLightbox extends MediasLightbox{
    constructor(data, buildDOM){
        super(buildDOM)
        this.title = data.firstElementChild.getAttribute("alt")
        this.url = data.lastElementChild.currentSrc
    }
    renderLightbox(){
        const singleLightboxElement = `
        <button class="lightbox_close">fermer</button>
        <a href="#" class="lightbox_prev">précédent</a>
        <br>
        <a href="#" class="lightbox_next">suivant</a>
        <div class="lightbox_container">
        <video controls autoplay> <source src="${this.url}" type="video/mp4" >
        </div>
        `
        return singleLightboxElement
    }
}

export class FactoryLightbox {
    constructor (data, buildDOM){
console.log(buildDOM)
        if (data.lastElementChild.currentSrc.endsWith('.jpg')){
            return new ImageLightbox(data, buildDOM)

        }
        else if(data.lastElementChild.currentSrc.endsWith('.mp4')){
            return new VideoLightbox(data, buildDOM)
            
        }
        else{
            throw 'erreur'
        }
    }
}



