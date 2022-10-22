import Media from "./media";
export default class Video extends Media{
    constructor(data){
        super(data)
        this.video = data.video
    }
} 