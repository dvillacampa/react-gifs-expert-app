import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Prueba del componente <GifItem>', () => {

    const title = 'Zelda';
    const url = 'http://url.de.prueba.com/';

    test('Debería hacer match con el snapshot', () => {

        const { container } = render(<GifItem title={ title } url={ url }/>);

        expect( container ).toMatchSnapshot();

    });

    test('La propiedad src del elemento <img> debería coincidir con la URL de la imagen', () => {

        render(<GifItem title={ title } url={ url }/>);
        expect( screen.getByRole( 'img' ).src).toBe( url );
    });

    test('La propiedad alt del elemento <img> debería coincidir con el título de la imagen', () => {

        render(<GifItem title={ title } url={ url }/>);
        const { alt } = screen.getByRole( 'img' );
        expect( alt ).toBe( title );

    });

    test('Debe renderizar el texto title', () => {

        render(<GifItem title={ title } url={ url }/>);
        expect( screen.getByText( title )).toBeTruthy();

    });


});