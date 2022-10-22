import PhotographModel from "../models/photograph"
import Image from "../models/image"
import Video from "../models/video"
export default class PhotographerPageFactory{
    constructor (data , type){
        if (type === "photograph"){
            return new PhotographModel(data)
        }
        else {
            throw 'type inconnu'
        }
    }
}
export class PhotographGaleryFactory{
    constructor (data, type){
        if (type === "image"){
            return new Image(data)
        }
        else if(type === "video"){
            return new Video(data)
        }
        else{
            throw 'type inconnu'
        }
    }
}
