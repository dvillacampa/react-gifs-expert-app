import { retrieveGifs } from '../../src/helpers/retrieveGifs';

describe('Pruebas de retrieveGifs()', () => {

    const category = 'zelda';

    test('Debería retornar un Array de Gifs', async() => {

        const gifs = await retrieveGifs( category );
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        });
       
    });


});