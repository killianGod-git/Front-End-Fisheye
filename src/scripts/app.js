import { photographerFactory } from "./factories/photographerFactory";
import { getPhotographers } from "./services/api";

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.innerHTML += userCardDOM;
    });
};

async function init() {
    // Récupère les datas des photographes
    const  photographers  = await getPhotographers();
    displayData(photographers);
};

init();
