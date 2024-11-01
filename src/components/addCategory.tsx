import { useState } from 'react';

type Props = {

    newCategory : ( onNewCategory : string ) => void;

}


export const AddCategory = ( {newCategory} : Props ) => {

    const [ value, setValue ] = useState('');

    const onInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {

        console.log(e.target.value);
        setValue( e.target.value );
    }

    const onEnter = (e : React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        console.log(value);
        
        if( value.trim().length <= 1 ) return;
         
        newCategory( value );
        setValue('');
        
    }

    return (

        <div className='container' >
            <form  onSubmit={ onEnter }> 
                <input style={{width: '100%'}}
                className="inputGif" 
                type="text" 
                placeholder="Buscar gifs"
                value={ value }
                onChange={ onInputChange }
                />
            </form>
        </div>
    )


}


