
import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { GlobalContext } from './../../Store';


import './product-detail.scss';


export default function ProductDetail() {

    const { products } = useContext(GlobalContext);

    console.log(products);

    let { id } = useParams();

    let product = products.filter((product) => product.id === parseInt(id))[0];

    console.log(product);

    return (
        <div className="product-detail">

            <div className="image-container">
                <img className="product-image" src={product.image} alt="clay-brick" />
            </div>


            <div className="product-info">
                <h4 className="page-heading">
                    {product.name}
                </h4>

                <p className="page-desc">
                    {product.dimensions}
                </p>

                <h3>
               What are wire cut bricks used for?
               
                    {product.cost}
                </h3>
                <h4>The wirecut bricks are the bricks manufacture in factory other than in yards like the normal bricks. The face finishing is much superior than the normal bricks. For the same reason, this bricks is used for exposed masonry. Wirecut bricks are used for exposed or non plastered construction of interior or exterior walls.</h4>



            </div>



        </div>)
}
