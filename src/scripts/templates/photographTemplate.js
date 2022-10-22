export class PhotographHeaderTemplate{
    constructor(data){
        this.data = data
    }
    createMovieHeader(){
        const photographHeader = document.getElementsByClassName('photograph-header')
        const headerContent = `
        <div>
            <h1> ${data.name} </h1>
            <h2> ${data.city} ${data.country}</h2>
            <h3> ${data.tagline} </h3>
        </div>
        <div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        </div>
        <div>
            <img src="${data.portrait}" alt="${data.name}">
        </div>
        `
        photographHeader.innerHTML = headerContent
        return photographHeader
    }
} 
export class photographGaleryTemplate{
    constructor (data, Type){
        this.data = data
        this.type = type
    }
    photographGalery(){
        console.log('galery')
    }
} 