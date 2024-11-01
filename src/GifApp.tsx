import { useState } from 'react';
import { AddCategory } from './components/'
import { GifGrid } from './components';

export const GifApp = () => {

    const [ categorias, setCategorias ] = useState(['One Piece']);

    const onNewCategory = ( newCategory : string ) => {


        if( categorias.includes( newCategory ) ) return;

        setCategorias( [ newCategory, ...categorias ] )

    }
    
    return (

        <>

            <div>
            {/* <h1 className='text-center'>Gif App</h1> */}

                <AddCategory newCategory = { onNewCategory } />

                { categorias.map( (categoria) => <GifGrid categorias= { categoria } key={categoria} /> ) }


            </div>

          
        </>

    )

}