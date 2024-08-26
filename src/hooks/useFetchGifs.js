import { useEffect, useState } from "react";
import { retrieveGifs } from "../helpers/retrieveGifs";

export const useFetchGifs =  ( category ) => {

     // Hooks: useState para renderizar el componente cuando éste cambia
    const [ images, setImages ] = useState( [] );
    // isLoading es true al inicio de la carga de las imágnenes
    const [isLoading, setIsLoading] = useState( true );
    
    // Esta función recupera los gifs (fetch API) y los añade a la colección de Gifs
    const getGifs = async () => {
        const newImages = await retrieveGifs( category );
        // Se cargan las imágnes y se actualiza el loading a false
        setImages( newImages );
        setIsLoading( false );
    }
        
    // Evita múltiples llamadas a la API. Solo se llamará cuándo se renderize el componente por primera vez.
    useEffect ( () => {
        getGifs();
     }, [] );


    return {
        images,
        isLoading
    };


}