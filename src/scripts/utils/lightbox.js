import { FactoryLightbox } from "../factories/renderLightbox";

export  class Lightbox{
    static init(){
        // Initialisation
        const lightBoxZone=`
            <button class="lightbox_close"></button>
            <a href="#" class="lightbox_prev"></a>
            <br>
            <a href="#" class="lightbox_next"></a>
            <div class="lightbox_container">
                <div>Content lightbox</div>
            </div>`
        const dom = document.createElement('div');
        dom.classList.add('lightbox')
        dom.innerHTML = lightBoxZone
        document.body.appendChild(dom)
    }
    constructor(url, gallery, Lcontainer, initialIndex, node){
        console.log(url)
        this.gallery = gallery
        this.container=Lcontainer
        this.onKeyUp = this.onKeyUp.bind(this)
        document.addEventListener('keyup', this.onKeyUp)
        this.index=initialIndex
        this.mediaType=node;
        Lcontainer.innerHTML=this.loadImage(url, node)
        this.initLightboxEvent()
    }   
    loadImage(url, node){
        if(node==="img"){
            return `<img src=${url} />`
        }else{
            return `<video controls autoplay src='${url}'></video>`
        }
    }
    onKeyUp(e){
        if (e.key === 'Escape'){ 
            this.closeLightbox(e)
        }
    }
    closeLightbox( e ){
        e.preventDefault()
        const dom=document.querySelector('.lightbox')
                    dom.classList.remove('lightbox_active')
        document.removeEventListener('keyup', this.onKeyUp)
    }
    nextLightbox( e ){
        e.preventDefault()
        this.index=this.index+1
        if(this.index >= this.gallery.length){
            this.index=0
        }
        const url=this.gallery[this.index]
        this.container.innerHTML=this.loadImage(url, this.typeMedia(url))
    }
    prevLightbox( e ){
        e.preventDefault()
        this.index=this.index-1
        if(this.index < 0){
            this.index=this.gallery.length-1
        }
        const url=this.gallery[this.index]
        this.container.innerHTML=this.loadImage(url, this.typeMedia(url))
        
    }

    initLightboxEvent = () => {
        document.querySelector('.lightbox_close').addEventListener('click', this.closeLightbox.bind(this));
        document.querySelector('.lightbox_prev').addEventListener('click', this.prevLightbox.bind(this));
        document.querySelector('.lightbox_next').addEventListener('click', this.nextLightbox.bind(this))
    }

    typeMedia=(url)=>{
        return (url.endsWith(".mp4")?"video":"img")
    }
}
