import Image from "../models/image"
import Video from "../models/video"
export default class PhotographGaleryFactory{
    constructor (data){
        if (data.image){
            return new Image(data)
        }
        else if(data.video){
            return new Video(data)
        }
        else{
            throw 'erreur'
        }
    }
}