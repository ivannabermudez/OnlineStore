import {createContext} from 'react';


/**
 * should describe the data to be held in the context 
 * its just a description / no implementation here!!!!!
 * data is inmutable
 */
const globalContext = createContext({
    cart: [],
    user: {},

    getNumberOfProducts: () => {},
    addToCart: () => {},
    removeFromCart: () => {}

});

export default globalContext; 