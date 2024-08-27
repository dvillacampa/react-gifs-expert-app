import { useFetchGifs } from '../hooks';
import { GifItem } from '../components';
import { PropTypes} from 'prop-types';

export const GifGrid = ( {category} ) => {

    const { images, isLoading } = useFetchGifs( category);

    return (
        <>
            <h3>{category}</h3>
            {   // So isLoading es false no renderiza el elemento h2
            }
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

GifGrid.propTypes =  {
    category: PropTypes.string.isRequired
}