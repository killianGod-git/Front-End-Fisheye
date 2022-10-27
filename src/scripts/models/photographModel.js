export default class PhotographModel{
    constructor(data){
        this.name = data.name
        this.id = data.id  
        this.city = data.city
        this.country = data.country
        this.tagline = data.tagline 
        this.price = data.price
        this.portrait = data.portrait
    }
    renderHeader(){
        const headerContent = `
        <div class="photograph-information">
            <h1 class="name"> ${this.name} </h1>
            <h2 class="location"> ${this.city} ${this.country}</h2>
            <h3 class="tagline"> ${this.tagline} </h3>
        </div>
        <div class="photograph-modal">
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        </div>
        <div class="photograph-portrait">
            <img class="portrait" src="./assets/photographers/portrait/${this.portrait}" alt="${this.name}">
        </div>
        `

        return headerContent
    }

}