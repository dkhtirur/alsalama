import React from "react";

import { useHistory } from "react-router-dom";

import './product-list.scss';


/**
 * 
 * Function lists the products
 * 
 * @param {*} props 
 */
function ProductList(props) {

	let history = useHistory();

	function redirect(product) {

		console.log(product);

		history.push("/product/" + product.id);
	}

	return (<div className="product-list">

		{
			props.products.map((product) => {

				return (<div className="product" onClick={() => redirect(product)}>
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
	</div>)
}


export default ProductList;
