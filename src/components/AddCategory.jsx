import { useState } from 'react';
import { PropTypes} from 'prop-types';


export const AddCategory = ({ onNewCategory }) => {

    // El valor inicial del Hook es vacío. 
    // La función setInputValue es la responsable de establecer el valor del <input> en inputValue
    // inputValue guarda el estado del <input> es decir, el contenido visible del <input>
    const [inputValue, setInputValue] = useState(''); 

    // La función onChange recibe como argumento event
    // Se usa este argumento para llamar a la función del Hook onNewCategory y actualizar el estado del componente 'useState' desde el componente padre.

    // Se podría haber hecho así:
    // onChange = { (event) => onInputChange( event ) }

    // Desestructuramos 'event' en 'target' para reducir el código.
    // El elemento de la jerarquía 'target' contine el valor del <input> 'event.target.value'
    const onInputChange = ( { target } ) => {
        setInputValue( target.value ); // Llama a la función callback setInputValue con el nuevo valor del <input>
    };

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        const newCategory = inputValue.trim();
        // Si ha escrito menos de 2 caracteres no hace nada aunque se haya enviado el form.
        if( newCategory.length <= 1) return;

        // setCategories( categories => [ ...categories, inputValue ] ); Esto lo usamos cuando recibíamos el Array de Categorías del padre

        // Vamos a llamar al evento que hemos recibido como props desde el componente padre <GifExpertApp> al añadir este componente
        onNewCategory( newCategory );
        // Elimina el texto del Input
        setInputValue('');
    }

    // Se define un form para responder el evento onSubmit con la tecla "Enter"
    // El <form> hace de contenedor del elemento <input>.
    // Properties:
    //      paceholder  = texto que se muestra cuando el <input> aparece vacío, value = vacío
    //      value       = valor que se muestra en el <input>
    //      type        = comportamiento del <input>
    //      onChange    = un evento que necesitamos manejar para reflejar los cambios que hace el usuario en el <input>
    return (
            <form 
                onSubmit={ onFormSubmit }
                aria-label="form"> 
                <input 
                    type="text"
                    placeholder="Buscar gifs"
                    value={ inputValue }
                    onChange={ onInputChange }
                />
            </form>
    );
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}