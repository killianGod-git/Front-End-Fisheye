export  class Lightbox{
    static init(){
        const mediasUrl = document.querySelectorAll('.media').forEach(mediaUrl => mediaUrl.addEventListener('click', e =>{
           new Lightbox(e.currentTarget.lastElementChild.currentSrc)
           console.log(e.currentTarget.lastElementChild.currentSrc)
        }))
    }
    constructor(url){
        const element = this.buildDOM(url)
        document.body.appendChild(element)
    }

    buildDOM (url){
        const dom = document.createElement('div');
        dom.classList.add('lightbox')
        dom.innerHTML = `
        <button class="lightbox_close">fermer<button>
        <a href="#" class="lightbox_prev">précédent</a>
        <br>
        <a href="#" class="lightbox_next">suivant</a>
        <div class="lightbox_container">
        <img src="${url}" alt="" >
        </div>

        `
        return dom
    }
}
