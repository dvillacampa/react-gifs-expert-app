import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas del componente <GifGrid>', () => { 

    const category = 'Zelda';
    const textLoading = 'Cargando...';

    test('Debería mostrar el Loading inicialmente', () => {

        // Mock del useFetchGifs con un estado inicial sin gifs y cargando...
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category }/>);
        // Muy estricto, si cambia el elemento h2 fallará este test
        const h2 = screen.getByRole( 'heading', { level: 2 } );
        // Valida que el elemento h2 contenga el texto Cargando...
        expect(h2.innerHTML).toBe(textLoading);
        // Valida que aparezca el texto Cargando...
        expect( screen.getByText( textLoading ) ).toBeTruthy();

    });

    test('Debería mostrar las imágenes cuando se llama useFetchGifs', () => {
    
        const gifs = [
            {
                id:     'ABC',
                title:  'Saitama',
                url:    'https://saitama.com'
            },
            {
                id:     'XYZ',
                title:  'Goku',
                url:    'https://goku.com'

            }
        ];

        // Mock del useFetchGifs con un estado inicial con gifs.
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        
        render( <GifGrid category={ category }/>);

        // Valida que se renderizan tantas imágenes y párrafos (img, paragrahs) como elementos tiene el Array de gifs mockeado.
        expect( screen.getAllByRole( 'img' ).length ).toBe( gifs.length );
        expect( screen.getAllByRole( 'paragraph' ).length ).toBe( gifs.length);

        screen.debug();
    
    });

 });