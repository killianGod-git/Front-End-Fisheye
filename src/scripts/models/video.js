import Media from "./media";
export default class Video extends Media{
    constructor(data){
        super(data)
        this.video = data.video
    }
    renderGalery(){
        const singleGaleryElement = `
        <article>
            <div class="media">
                <video>
                    <source src="${this.url}/${this.video}" type="video/mp4">
                </video>
            </div>
            <div class="media-information" >
                <p class="title-galery"> ${this.title}</p>
                <div class="likes-section"> 
                    <span class="likes-galery">${this.likes}</span> 
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
        </article>
        `
        return singleGaleryElement
    }
} 