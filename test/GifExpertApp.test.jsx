import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Probando el componente <GifExpertApp />', () => { 

    const elementInput = 'textbox';
    const elementoForm = 'form';
    const elementHeading = 'heading';
    const initCategories = ['cats', 'dogs']
    const appTitle = 'GifExpertApp';

    test('Se renderiza el título de la aplicación', () => {

        render(<GifExpertApp initCategories = { initCategories } />);
        expect( screen.getByText( appTitle ).innerHTML ).toBe( appTitle );

    });

    test('Deberían renderizarse las categories iniciales', () => {

        render(<GifExpertApp initCategories = { initCategories } />);
        initCategories.forEach( (elemento) => {
            expect( screen.getByText( elemento ).innerHTML ).toBe( elemento );
        });

    });
    
    test('NO debería hacer nada si el elemento input ya existe', () => {
        
        const inputValue = 'cats';
        
        render(<GifExpertApp initCategories = { initCategories } />);
        const input = screen.getByRole( elementInput );
        const form = screen.getByRole( elementoForm );
        
        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );
        
        expect( screen.getAllByRole( elementHeading, {level: 3} ).length ).toBe( initCategories.length );

    });

    test('Debería añadir una nueva categoría', () => {
        
        const inputValue = 'dolphins';
        
        render(<GifExpertApp initCategories = { initCategories } />);
        const input = screen.getByRole( elementInput );
        const form = screen.getByRole( elementoForm );
        
        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );
        
        expect( screen.getAllByRole( elementHeading, {level: 3} ).length ).toBe( initCategories.length + 1 );

        screen.debug();

    });


});