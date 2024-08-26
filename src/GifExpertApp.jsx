import { useState } from 'react';
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    // Hook categories del componente <GitExpertApp>. Se definien dos categorías iniciales
    const [ categories, setCategories ] = useState( ['Breakdance', 'cats', 'dogs'] );

    const addNewCategory = ( category ) => {
        // Para que funcione, se necesita crear un nuevo Array y pasarlo a la función setCategories
        // No podemos usar, por ejemplo, categories.push('nueva categoria')
        
        // Controla que la categoria no exista ya en categories
        if (categories.includes( category )) return;

        // El nuevo Array debe conservar los valores actuales en categories. Dos formas de hacerlo:
        // Añade la nueva categoría después de los valores actuales: [...categories, category]
        // Añade la nueva categoría al inicio de los valores actuales: [category, ...categories]
        setCategories( [category, ...categories] );
    }
    // La función useState es la que se encarga de renderizar el componente cada vez que hay cambios
    // Llamando la función setCategories, forzará la renderización del componente a través del array categories definido en el Hook
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onNewCategory={ ( category ) => addNewCategory( category ) } // Se pasa la función que gestiona el estado del componente como un 'props' del componente <AddCategory>. Se llamará desde el componente.
                />
                { 
                    categories.map( category => 
                        <GifGrid 
                            key={ category } 
                            category={ category }
                        />
                    )
                }
        </>
    )
};