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
                <img  src="./assets/photographers/${this.photographerId}/${this.image}" alt="${this.title}">
            </div>
            <div class="media-information">
                <p> ${this.title}</p>
                <p> ${this.likes}</p>
            </div>
        </article>
        `
        return singleGaleryElement
    }
}
