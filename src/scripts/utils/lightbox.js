import { FactoryLightbox } from "../factories/renderLightbox";

export  class Lightbox{
    static init(){
        const mediasUrl = Array.from(document.querySelectorAll('.media'));
        const gallery = mediasUrl.map(mediaUrl => mediaUrl.lastElementChild.currentSrc)
        mediasUrl.forEach(mediaUrl => mediaUrl.addEventListener('click', e =>{
            
            let mediasLightbox = new FactoryLightbox(mediaUrl, this.fonction)
            const dom = document.createElement('div');
            dom.classList.add('lightbox')
            dom.innerHTML = mediasLightbox.renderLightbox()
            document.body.appendChild(dom)
            mediasLightbox.initevent()

        }));
    }
    constructor(url, gallery){
        this.fonction = this.initLightboxEvent
       this.gallery = gallery
       this.loadImage(url)
       this.onKeyUp = this.onKeyUp.bind(this)
        document.addEventListener('keyup', this.onKeyUp)
    }   
    loadImage(url){
        console.log(url)
        this.url = null
        const image = new Image()
        const container = this.element.querySelector('.lightbox_container')
        const loader = document.createElement('div')
        loader.classList.add('lightbox_loader')
        container.innerHTML = ''
        container.appendChild(loader)
        image.onload = () => {
            container.removeChild(loader)
            container.appendChild(image)
            this.url = url
        }
        image.src = url
    }
    onKeyUp(e){
        if (e.key === 'Escape'){ 
            this.closeLightbox(e)
        }
    }
    closeLightbox( e ){
        e.preventDefault()
        this.element.classList.add('fadeOut')
        window.setTimeout(() =>{
            this.element.parentElement.removeChild(this.element)
        }, 500)
        document.removeEventListener('keyup', this.onKeyUp)
    }
    nextLightbox( e ){
        e.preventDefault()
        let i = this.gallery.findIndex(image => image === this.url)
        this.loadImage(this.gallery[i + 1])
        
    }
    prevLightbox( e ){
        e.preventDefault()
        let i = this.gallery.findIndex(image => image === this.url)
        this.loadImage(this.gallery[i - 1])
        
    }


    initLightboxEvent = () => {
console.log('test')
        doccument.querySelector('.lightbox_close').addEventListener('click', this.closeLightbox.bind(this));
        doccument.querySelector('.lightbox_prev').addEventListener('click', this.prevLightbox.bind(this));
        doccument.querySelector('.lightbox_next').addEventListener('click', this.nextLightbox.bind(this))
    }
}
