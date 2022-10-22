export default class PhotographModel{
    constructor(data){
        this.name = data.name
        this.id = data.id  
        this.city = data.city
        this.country = data.country
        this.tagline = data.likes 
        this.price = data.price
        this.portrait = data.portrait
    }
    renderHeader(){
        const headerContent = `
        <div>
            <h1> ${this.name} </h1>
            <h2> ${this.city} ${this.country}</h2>
            <h3> ${this.tagline} </h3>
        </div>
        <div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        </div>
        <div>
            <img src="${this.portrait}" alt="${this.name}">
        </div>
        `

        return headerContent
    }

}