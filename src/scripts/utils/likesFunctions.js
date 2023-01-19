export function incrementLikes(e){
    const heart = e.target
    if (heart && heart.classList.contains('fa-heart') ){
        const pHeart = heart.parentElement

        let n = Number.parseInt(pHeart.querySelector('.likes-galery').innerHTML)

        if (!pHeart.classList.contains('incremented') ){
            n += 1;
            pHeart.classList.toggle('incremented')
            heart.classList.toggle('fa-solid')
            heart.classList.toggle('fa-regular')
            UpdateTotalLikes(1)
        } else{
            n -= 1;
            pHeart.classList.toggle('incremented')
            heart.classList.toggle('fa-solid')
            heart.classList.toggle('fa-regular')
            UpdateTotalLikes(-1)
        }  
        pHeart.querySelector('.likes-galery').innerHTML = n;   
    }


}
const coeur = document.getElementsByClassName('likes-galery')

export function displayLikesTotal( total, price){
const likeSection = document.getElementById('likes');
const priceSection = document.getElementById('price');
likeSection.innerHTML += total + ' <i class="fa-solid fa-heart"></i>'
likeSection.setAttribute('aria-label' , 'nombre de j\'aime total ' + total + ' j\'aime' )
priceSection.innerHTML += price + '€ / jour'
priceSection.setAttribute('aria-label' , 'tarif ' + price + '€/jour' )

}
export function UpdateTotalLikes(likes){
const likesTotal = document.querySelector('#likes').innerHTML;
let n = Number.parseInt(likesTotal)
n += likes
document.querySelector('#likes').innerHTML = n + ' <i class="fa-solid fa-heart"></i>';
}