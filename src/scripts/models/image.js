import Media from "./media"
export default class Image extends Media{ 
    constructor(data){
        super(data)
        this.image = data.image
    }
}