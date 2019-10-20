
import React, { Component } from "react";

import './products.scss';

import Gallery from 'react-photo-gallery';

export default class Landing extends Component {

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
                <div className="product-list">

                    {
                        products.map((product) => {

                            return (<div className="product">
                                <img alt="bricks in kerala ,products of clay works" className="product-image" src={product.image} />
                                <div>
                                    <h3 className="product-name">
                                        {product.name}
                                    </h3>
                                    <p className="product-desc">
                                        {product.dimensions}
                                    </p>
                                    <p className="product-price">
                                        <strong>
                                            {product.cost}
                                        </strong>
                                    </p>
                                </div>
                            </div>);


                        })
                    }


                </div>

                {/* <Gallery photos={photos} />; */}

            </div>)
    }
}
