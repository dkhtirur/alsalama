/**
 * 
 * Store as an initial local store for the app
 * 
 * All the data that is needed accross the app like user, openProperties etc goes from here.
 * 
 */

import React, { useEffect, createContext, useReducer } from 'react';


/**
 * Initial State to be stored
 * accross the app
 * 
 * For now maintaining only user data 
 * 
 * #todo Compare the setup with state manager utility 
 * 
 */
const initialState = {
    categories: [{
        name: 'wall',
        label: 'Wall',
        image: '',
        products: [{
            id: 1,
            name: 'Wire Cut Clay Brick',
            image: require('./assets/images/brickhand1.jpg'),
            dimensions: '8.5 * 4 * 3 inches',
            cost: 'Rs 16 per piece'

        }, {
            id: 2,
            name: 'Wire Cut Clay Brick (First)',
            image: require('./assets/images/bricks.jpg'),
            dimensions: '8.5 * 4 * 3 inches',
            cost: 'Rs 13 per piece'
        }, {
            id: 3,
            name: 'Hurudees',
            image: require('./assets/images/products/hurudees.jpeg'),
            dimensions: '2ft long',
            cost: 'Rs 80 per piece'
        }]
    }, {
        name: 'roof',
        label: 'Roof',
        image: '',
        products: [{
            id: 4,
            name: 'Roofing Tile (Clay)',
            image: require('./assets/images/products/tile.jpeg'),
            // dimensions: '2ft long',
            cost: 'Rs 28 per piece'
        }]

    }],
    products: [{
        id: 1,
        name: 'Wire Cut Clay Brick',
        image: require('./assets/images/brickhand1.jpg'),
        dimensions: '8.5 * 4 * 3 inches',
        cost: 'Rs 16 per piece'

    }, {
        id: 2,
        name: 'Wire Cut Clay Brick (First)',
        image: require('./assets/images/bricks.jpg'),
        dimensions: '8.5 * 4 * 3 inches',
        cost: 'Rs 13 per piece'
    }, {
        id: 3,
        name: 'Hurudees',
        image: require('./assets/images/products/hurudees.jpeg'),
        dimensions: '2ft long',
        cost: 'Rs 80 per piece'
    },
    {
        id: 4,
        name: 'Roofing Tile (Clay)',
        image: require('./assets/images/products/tile.jpeg'),
        // dimensions: '2ft long',
        cost: 'Rs 28 per piece'
    }],
    items: [
        {
            src: require('./assets/images/glimpse/hall.jpg'),
            altText: 'Freshest fruits for your daily life',
            caption: 'Fruits and Vegetables directly from the farms.',
            heading: 'Fresh fruits & vegetables'
        }, {
            src: require('./assets/images/glimpse/passage.jpg'),
            heading: 'Refreshments',
            caption: 'Our entire bay to store all your favourite refreshments. Have you tried the new Tropicana Orange.',
        }, {
            src: require('./assets/images/brickdisplay3.jpg'),
            altText: 'Nuts to Coconuts',
            heading: 'Nuts to Coconuts',
            caption: 'We stock all of your grocery needs sourced fresh everyday'
        }, {
            src: require('./assets/images/glimpse/pathway.jpg'),
            altText: 'Nuts to Coconuts',
            heading: 'Nuts to Coconuts',
            caption: 'We stock all of your grocery needs sourced fresh everyday'
        }, {
            src: require('./assets/images/glimpse/walk.jpg'),
            altText: 'Nuts to Coconuts',
            heading: 'Nuts to Coconuts',
            caption: 'We stock all of your grocery needs sourced fresh everyday'
        }, {
            src: require('./assets/images/brickhand3.jpg'),
            altText: 'Nuts to Coconuts',
            heading: 'Nuts to Coconuts',
            caption: 'We stock all of your grocery needs sourced fresh everyday'
        },
    ]
};

/**
 * Context for sharing state accross app
 */
export const GlobalContext = createContext(initialState);


/**
 *  Provider links the reducer and context
 */
export const GlobalProvider = ({ children }) => {

    // Create user object
    // const user = new LoginSignup();

    const [state] = useReducer(AppReducer, initialState)

    useEffect(() => {

        // Make dummy api call
        // user.MockLogin({}).then(result => {

        //     dispatch({ type: 'user', payload: result.response })
        // });

        return () => {

        };

    }, [])

    // Store that is accessible accross the app
    let store = { items: state.items, categories: state.categories, products: state.products }

    return (<GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>)

}

/**
 * Reducer for managing the state
 * 
 * @param state 
 * @param action 
 */
export const AppReducer = (state, action) => {

    switch (action.type) {
        case 'user':
            return { ...state, user: action.payload };
        default:
            return state;
    }
}