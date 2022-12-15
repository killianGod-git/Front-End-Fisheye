export function displaySortMedia(medias , optionsSort){
    switch(optionsSort){
        case 'Popularité':
            medias.sort((a, b) =>{
                return a.likes - b.likes
            })
            break;
        case 'Date':
            medias.sort((a, b) =>{
                const Da = new Date(a.date)
                const Db = new Date(b.date)

                return Da - Db
            })
            break;
        case  'Titre':
            medias.sort((a, b)=>{
                return a.title.localeCompare(b.title) 
            })
            break;
    }
    return medias
 }