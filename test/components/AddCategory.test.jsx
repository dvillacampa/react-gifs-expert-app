import { render, fireEvent, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas del componente <AddCategory>', () => {

    const inputValue = 'Zelda';
    const elementInput = 'textbox';
    const elementoForm = "form";

    test('Debería rellenar el valor del <input>', () => {

        // Pasa una función anónima para validar la propiedad requerida
        render(<AddCategory onNewCategory={ () => {} }/>);
        // Obtiene el elemento renderizado <input> que es un textbox
        const input = screen.getByRole( elementInput );
        // Envía el evento input que disparará un onChange del elemento con un valor
        fireEvent.input( input, { target: { value: inputValue } });
        // Valida el valor del elemento tras dispararse el evento onChange
        expect( input.value ).toBe( inputValue );

    });

    test('Debería llamar a la función onNewCategory si el input tiene un valor', () => {

        const onNewCategory = jest.fn();
        
        // Pasa la función mock de Jest (jest.fn) a la propiedad onNewCategory del componente
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const input = screen.getByRole( elementInput );
        // Para que encuentre el elemento form se ha añadido la propiedad aria-lable en el elemento form del componente
        const form = screen.getByRole( elementoForm );

        // Lanza los eventos
        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );

        // Valida que el input del formulario esté vacío después de enviar al formulario.
        expect( input.value ).toBe('');

        // Valida que la función mock (jest.fn) ha sido llamada una vez
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 );
        // Valida que llama a la función onNewCategory (jest.fn) con el valor pasado como argumento en el test
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });

    test('No debería llamar a la función onNewCategory si el input está vacío', () => {

        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        // Para que encuentre el elemento form se ha añadido la propiedad aria-lable en el elemento form del componente
        const form = screen.getByRole( elementoForm );

        // Lanza los eventos
        fireEvent.submit( form );
        // Valida que la función mock (jest.fn) ha sido llamada una vez
        expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
        expect( onNewCategory ).not.toHaveBeenCalled();
    });


});