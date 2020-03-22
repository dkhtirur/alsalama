
import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { GlobalContext } from './../../Store';


import './product-detail.scss';


export default function ProductDetail() {

    const { products } = useContext(GlobalContext);

    console.log(products);

    let { id } = useParams();

    let product = products.filter((product) => product.id == id)[0];

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
                    {product.cost}
                </h3>

            </div>



        </div>)
}
