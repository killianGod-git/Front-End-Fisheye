export function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id} = data;

    const picture = `./assets/photographers/portrait/${portrait}`;

    function getUserCardDOM() {
       const card = `
       <article>
            <a href="photographer.html?id=${id}" aria-label="${name}">
                <img src="${picture}" alt="${name}">
                <h2> ${name} </h2>
            </a>
            <h3> ${city} ${country}</h3>
            <h4> ${tagline} </h4>
            <span> ${price} €/jours </span>
        </article>`;
        return card;
    }
    return {  getUserCardDOM }
}
