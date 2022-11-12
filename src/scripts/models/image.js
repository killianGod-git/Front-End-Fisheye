import Media from "./media"
export default class Image extends Media{ 
    constructor(data){
        super(data)
        this.image = data.image
    }
    renderGalery(){
        const singleGaleryElement = `
        <article>
            <div class="media">
                <img  src="${this.url}/${this.image}" alt="${this.title}">
            </div>
            <div class="media-information">
                <p class="title-galery"> ${this.title}</p>
                <p class="likes-galery"> ${this.likes} <i class="fa-solid fa-heart galery-element-like" onclick="incrementLikes()"></i></p>
            </div>
        </article>
        `
        return singleGaleryElement
    }
}
