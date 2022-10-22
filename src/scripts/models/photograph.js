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
    get name(){
        return this.name
    }
    get id(){
        return this.id
    }
    get city(){
        return this.city
    }
    get country(){
        return this.country
    }
    get tagline(){
        return this.tagline
    }
    get price(){
        return this.price
    }
    get portrait(){
        return `./assets/photographers/${this.portrait} `
    }

}