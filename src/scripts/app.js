import { photographerFactory } from "./factories/photographer";
import { getPhotographers } from "./services/api";
import { getMediaPhotographers } from "./services/api";

// getPhotographers();
// getMediaPhotographers();
    // Penser à remplacer par les données récupérées dans le json
    const photographers = getPhotographers();
    console.log(photographers)
    // // et bien retourner le tableau photographers seulement une fois
    // return ({
    //     photographers: [...photographers, ...photographers, ...photographers]})


async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const  photographers  = await getPhotographers();
    console.log(photographers)
    displayData(photographers);
};

init();
