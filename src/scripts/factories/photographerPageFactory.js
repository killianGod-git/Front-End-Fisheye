export function photographPageFactory(data){
    const {name, portrait, city, country, tagline, price, id} = data;
    function displayHeaderPhotographer(){
        const headerPhotograph = `
        <div>
            <div>
                <h1> ${name} </h1>
                <h2> ${city} ${country}</h2>
                <h3> ${tagline} </h3>
            </div>
            <div>
                <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            </div>
            <div>
                <img src="./assets/photographers/${name}/${portrait}" alt="${name}">
            </div>
        </div>
        `;
        return headerPhotograph
    } return displayHeaderPhotographer;
} 


export function photographDataFactory(){
    const {id, photographerId, title, image, likes, date, price} = MediaData;
    function displayPhotographFilter(){
        const photographFilter = `
        <div>
            <select>
                <option>
                <option>
                <option>
        </div>
        `; 
        return photographFilter;
    }
    function displayMediaPhotograph(){
        const photographGalery = `
        <article>
            <img src="${image}">
            <div>
                <h2> ${title}</h2>
                <p> ${likes}</p>
        </article>
        `; return photographGalery;
    } return photographDataFactory;
}
