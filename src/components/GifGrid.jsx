import { useFetchGifs } from '../hooks';
import { GifItem } from '../components';

export const GifGrid = ( {category} ) => {

    const { images, isLoading } = useFetchGifs( category);

    return (
        <>
            <h3>{category}</h3>
            { isLoading && <h2>Cargando...</h2> }
            <div className='card-grid'>
            {
                images.map ( ( imagen )  => 
                    <GifItem key={ imagen.id } 
                        { ...imagen } /> // Expande todas las propiedas/atributos del objeto imagen. Forma fácil de pasar muchos argumentos
                    
                )
            }
            </div>
        </>
    )

};