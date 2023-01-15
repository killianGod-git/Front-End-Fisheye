export  class Lightbox{
    static init(){
        // Initialisation
        const lightBoxZone=`
            <button class="lightbox_close" aria-label="close dialog"></button>
            <a href="#" class="lightbox_prev" aria-label="previous image"></a>
            <br>
            <a href="#" class="lightbox_next" aria-label="next image"></a>
            <div class="lightbox_container">
                <div>Content lightbox</div>
            </div>`
        const dom = document.createElement('div');
        dom.classList.add('lightbox')
        dom.innerHTML = lightBoxZone
        document.body.appendChild(dom)
    }
    constructor(url, gallery, Lcontainer, initialIndex, node, data){
        this.data = data 
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
            return `<img src=${url} alt="${this.data.title}"/>
            <h2> ${this.data.title}</h2>`
        }else{
            return `<video controls src='${url}'></video>
            <h2> ${this.data.title}</h2>`
        }
    }
    onKeyUp(e){
        if (e.key === 'Escape'){ 
            this.closeLightbox(e)
        } else if (e.key === 'ArrowRight'){
            this.prevLightbox(e)
        }
        else if (e.key === 'ArrowLeft'){
            this.nextLightbox(e)
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
export function accessibilityLightbox(){
    const  focusableElements = 'button, [href], [tabindex]:not([tabindex="-1"])';
    const lightbox = document.querySelector('.lightbox'); 
    const firstFocusableElement = lightbox.querySelectorAll(focusableElements)[0]; 
    const focusableContent = lightbox.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1]; 
    document.addEventListener('keydown', function(e) {
    let isTabPressed = e.key === 'Tab';
  
    if (!isTabPressed) {
      return;
    }
  
    if (e.shiftKey ) { 
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableElement) { 
        firstFocusableElement.focus(); 
        e.preventDefault();
      }
    }
  })
  firstFocusableElement.focus()
};