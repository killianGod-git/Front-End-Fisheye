import Image from "../models/image"
import Video from "../models/video"
export class ImageLightbox {
    constructor(data){
        this.title = data.firstElementChild
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
        console.log('toto')

        return singleGaleryElement
    }
}
// export class VideoLightbox extends Video{
//     constructor(data){
//         super(data)
//     }
//     renderLightbox(){
//         const singleGaleryElement = `
//         <button class="lightbox_close">fermer</button>
//         <a href="#" class="lightbox_prev">précédent</a>
//         <br>
//         <a href="#" class="lightbox_next">suivant</a>
//         <div class="lightbox_container">
//         <video> <source src="${url}" type="video/mp4" >
//         </div>
//         `
//         return singleGaleryElement
//     }
// }

export class FactoryLightbox {
    constructor (data){

        if (data.lastElementChild.currentSrc){
            console.log('image')
            return new ImageLightbox(data)

        }
        else if(data.video){
            // return new VideoLightbox(data)
        }
        else{
            throw 'erreur'
        }
    }
}


    
