import Image from "../models/image"
import Video from "../models/video"
export default class PhotographGaleryFactory{
    constructor (data, type){
        if (type === "image"){
            return new Image(data)
        }
        else if(type === "video"){
            return new Video(data)
        }
        else{
            throw 'erreur'
        }
    }
}