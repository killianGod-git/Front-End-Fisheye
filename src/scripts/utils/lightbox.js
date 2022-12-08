export  class Lightbox{
    static init(){
        const mediasUrl = Array.from(document.querySelectorAll('.media'));
        const gallery = mediasUrl.map(mediaUrl => mediaUrl.lastElementChild.currentSrc)
        mediasUrl.forEach(mediaUrl => mediaUrl.addEventListener('click', e =>{
           new Lightbox(e.currentTarget.lastElementChild.currentSrc, gallery)

        }));
    }
    constructor(url, gallery){
       this.element = this.buildDOM(url)
       this.gallery = gallery
       this.loadImage(url)
       this.onKeyUp = this.onKeyUp.bind(this)
        document.body.appendChild(this.element)
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


    buildDOM (url){
        const dom = document.createElement('div');
        dom.classList.add('lightbox')
        dom.innerHTML = `
        <button class="lightbox_close">fermer</button>
        <a href="#" class="lightbox_prev">précédent</a>
        <br>
        <a href="#" class="lightbox_next">suivant</a>
        <div class="lightbox_container">
        <img src="${url}" alt="" >
        </div>
        `
        dom.querySelector('.lightbox_close').addEventListener('click', this.closeLightbox.bind(this));
        dom.querySelector('.lightbox_prev').addEventListener('click', this.prevLightbox.bind(this));
        dom.querySelector('.lightbox_next').addEventListener('click', this.nextLightbox.bind(this))
        return dom
    }
}
