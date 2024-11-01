
type Props = {

    categorias : string;

}

type Gifs = {

    id : number
    title: string
    images : {
        downsized : {
            url : string;
        }
    }

}

export const getGifs  = async ( {categorias} : Props) => {

    const apiUrl = import.meta.env.VITE_API_URL;
    const url = `${apiUrl}/search?api_key=css0H1azFVgZ6UJeu6X2jcnJnSmQDsKj&q=${categorias}&limit=6`;
    
    const res = await fetch (url);

    const {data} = await res.json();

    const gifs = data.map( (img : Gifs) => ( {

        id: img.id,
        title: img.title,
        img: img.images.downsized.url,

    } ) )

    return gifs;
} 