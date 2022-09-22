// ici création requetes api 
// fetch
// requete photographes
// requete media 
//fonction return un photographe
export async function getPhotographers() {
   const dataPhotofraphers = await fetch("./data/photographers.json")
    .then(res => res.json())
    .then(res => {

        return res.photographers
    })
    return dataPhotofraphers
  }
export async function getMediaPhotographers(){
    fetch("./data/photographers.json")
    .then(resmedia => resmedia.json())
    .then(resmedia => {
        console.log(resmedia.media)
        return resmedia.media
    })
}
