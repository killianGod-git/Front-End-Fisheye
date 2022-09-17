// ici création requetes api 
// fetch
// requete photographes
// requete media 
//fonction return un photographe
export async function getPhotographers() {
    fetch("./data/photographers.json")
    .then(res => res.json())
    .then(res => {
        console.log(res.photographers)
        return res.photographers
    })
  }
export async function getMediaPhotographers(){
    fetch("./data/photographers.json")
    .then(resmedia => resmedia.json())
    .then(resmedia => {
        console.log(resmedia.media)
        return resmedia.media
    })
}
