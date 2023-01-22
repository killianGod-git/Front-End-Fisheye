import Media from "./media"
export default class Image extends Media{ 
    constructor(data){
        super(data)
        this.image = data.image
    }
    renderGalery(){
        const singleGaleryElement = document.createElement('article')
        singleGaleryElement.setAttribute('id', "p" + this.id + "")
        const galeryElementContain = `
        
            <div href="#" class="media">
                <img id="${this.id}" src="${this.url}/${this.image}" alt="${this.title}" tabindex="0">
            </div>
            <div class="media-information">
                <p class="title-galery"> ${this.title}</p>
                <div class="likes-section"> 
                    <span class="likes-galery">${this.likes}</span> 
                    <i class="fa-regular fa-heart" aria-label="nombre de j'aime ${this.likes}" tabindex="0"></i>
                </div>
            </div>
        
        `
        singleGaleryElement.innerHTML += galeryElementContain
        return singleGaleryElement
    }
}

// modifier structure avec createElement