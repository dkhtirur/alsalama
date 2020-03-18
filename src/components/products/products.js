
import React, { Component } from "react";

import ProductList from './../../resources/common/product-list/product-list';

import './products.scss';

// r
export default class Products extends Component {

    constructor(props) {
        super(props);

        this.state = { activeIndex: 0 };
    }


    render() {

        const products = [{
            name: 'Wire Cut Clay Brick',
            image: require('./../../assets/images/brickhand1.jpg'),
            dimensions: '8.5 * 4 * 3 inches',
            cost: 'Rs 16 per piece'

        }, {
            name: 'Wire Cut Clay Brick (First)',
            image: require('./../../assets/images/bricks.jpg'),
            dimensions: '8.5 * 4 * 3 inches',
            cost: 'Rs 13 per piece'
        }, {
            name: 'Hurudees',
            image: require('./../../assets/images/products/hurudees.jpeg'),
            dimensions: '2ft long',
            cost: 'Rs 80 per piece'
        },
        {
            name: 'Roofing Tile (Clay)',
            image: require('./../../assets/images/products/tile.jpeg'),
            // dimensions: '2ft long',
            cost: 'Rs 28 per piece'
        }]

        return (
            <div className="gallery">
                <div className="page-content">
                    <h1 className="page-heading">
                        Products
                    </h1>

                    <p className="page-desc">
                        In the field of traditional clay bricks , the team carries two decades of experience moulding quality bricks that lasts a history. Upon advance payment we help in the delivery of the products at any
                        required location.
                    </p>
                </div>


                {/* Product list */}
                <ProductList products={products} />

                {/* <Gallery photos={photos} />; */}

            </div>)
    }
}
