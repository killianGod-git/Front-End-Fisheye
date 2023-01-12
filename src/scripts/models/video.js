import Media from "./media";
export default class Video extends Media{
    constructor(data){
        super(data)
        this.video = data.video
    }
    renderGalery(){
        const singleGaleryElement = document.createElement('article')
        singleGaleryElement.setAttribute('id', "p" + this.id + "")
        
        const galeryElementContain = `
        
            <div href="#" class="media">
                <video src="${this.url}/${this.video}" type="video/mp4">
            </div>
            <div class="media-information" >
                <p class="title-galery"> ${this.title}</p>
                <div class="likes-section"> 
                    <span class="likes-galery">${this.likes}</span> 
                    <i class="fa-regular fa-heart" aria-label=”likes” tabindex="0"></i>
                </div>
            </div>
        
        `
        singleGaleryElement.innerHTML += galeryElementContain
        return singleGaleryElement
    }
} 