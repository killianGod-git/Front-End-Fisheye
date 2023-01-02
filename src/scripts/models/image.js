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
        
            <div class="media">
                <img  src="${this.url}/${this.image}" alt="${this.title}">
            </div>
            <div class="media-information">
                <p class="title-galery"> ${this.title}</p>
                <div class="likes-section"> 
                    <span class="likes-galery">${this.likes}</span> 
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
        
        `
        singleGaleryElement.innerHTML += galeryElementContain
        return singleGaleryElement
    }
}

// modifier structure avec createElement