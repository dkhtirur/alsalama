import React from "react";


import './product-list.scss';


/**
 * 
 * Function lists the products
 * 
 * @param {*} props 
 */
function Landing(props) {

	return (<div className="product-list">

		{
			props.products.map((product) => {

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


	</div>)


}


export default Landing;
