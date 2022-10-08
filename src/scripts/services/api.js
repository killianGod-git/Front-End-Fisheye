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
export async function getOnePhotograph(photographerId){
    const dataPhotofraph = await getData();
    let photographers = dataPhotofraph.photographers
    let filterPhotograph = photographers.filter( photographers => photographers.id === photographerId)
    console.log(filterPhotograph);
    return filterPhotograph;
}
export async function getMediasPhotographer(photographerId){
    const dataPhotofraphersPage = await getData();
    let mediaPhotographers = dataPhotofraphersPage.media;
    let filteredMediaById = mediaPhotographers.filter( mediaPhotographers => mediaPhotographers.photographerId === photographerId );
    return filteredMediaById;
}

