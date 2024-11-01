import {  useEffect, useState } from 'react';
import { getGifs } from "../helpers/getGifs";
import { GifCard } from './gifCard';


type Props = {

    categorias : string;

}

type GifData = {
    id: number;
    title: string;
    img: string;
};
  

export const GifGrid = ( {categorias} : Props) => {

   
    const [images, setImages] = useState<GifData[]>([]);

    const getImages = async () => {

        const gifs = await getGifs( {categorias} );
        setImages( gifs );

    }

    useEffect( () => {

        getImages()

    }, [])
    

    return ( 

        <>
           <h1 className='text-center mt-5 mb-5'> {categorias} </h1>

                    <div className='container gifsContainer'>
                        <div className='row'>
                        {
                            images.map( ( image ) => ( 

                                <GifCard  

                                    key={ image.id }

                                    { ...image }

                                />

                                ))  
                        }
                        </div>
                    </div>
     
        </>
    )

}
