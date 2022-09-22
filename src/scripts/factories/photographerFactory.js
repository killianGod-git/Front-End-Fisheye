export function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement('a');
        link.setAttribute('href', 'photographer.html?id=' + name);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = city + ' ' + country;
        const h4 = document.createElement('h4');
        h4.textContent = tagline;
        const priceDom = document.createElement('span');
        priceDom.textContent = price + '€/jours';
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(priceDom);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}
