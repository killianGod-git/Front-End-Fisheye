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
    const dataPhotofraphersPage = await getData();
    let mediaPhotographers = dataPhotofraphersPage.media;
    let medias = mediaPhotographers.filter( mediaPhotographers => mediaPhotographers.photographerId === photographerId );
    let photographers = dataPhotofraphersPage.photographers;
    let photograph = photographers.find( photographers => photographers.id === photographerId);
    return {medias , photograph};
}

