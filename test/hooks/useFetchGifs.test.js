import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas del Hook useFetchGifs()', () => { 

    const category = 'Zelda';

    test('Debería retornar el estado inicial del Hook (sin imágenes y con IsLoading a true)', () => {

        // Renderiza y desestructura el Hook
        const { result } = renderHook( () => useFetchGifs( category ) );
        // Desestructura result para facilitar la comprensión del test.
        const { images, isLoading } = result.current;
        // Valida que inicialmente el array de images esté vacio
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('Debería retornar el estado del Hook (con imágenes y con IsLoading a false)', async() => {
        
        // Renderiza y desestructura el Hook
        const { result } = renderHook( () => useFetchGifs( category ) );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );
        // Desestructura result para facilitar la comprensión del test.
        const { images, isLoading } = result.current;
        // Valida que inicialmente el array de images esté vacio
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy(); 

    });


 });