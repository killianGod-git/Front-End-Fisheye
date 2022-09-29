// ici création requetes api 
// fetch
// requete photographes
// requete media 
//fonction return un photographe
async function getData(){
    const data = await fetch("./data/photographers.json")
    .then(res => res.json())
    .then(res => {
        return res
    })
    return data
}
export async function getPhotographers() {
   const dataPhotofraphers = await getData()
    return dataPhotofraphers.photographers
  }
export async function getMediasPhotographer(photographerId){
    const dataPhotofraphersPage = await getData()
    return dataPhotofraphersPage.media
}

