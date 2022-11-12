import ContactModal from "../models/ContactModal";
import PhotographModel from "../models/photographModel"
export default class PhotographerPageFactory{
    constructor (data , type){
        if (type === "photograph"){
            return new PhotographModel(data);
        }
        else {
            throw 'type inconnu'
        }
    }
}

