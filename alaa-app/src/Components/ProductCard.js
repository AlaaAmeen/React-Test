import React from 'react';
import {Link} from 'react-router-dom'

function ProductCard (props) {

	return (

		<div >
			 <Link to={`/product/${props.product.id}`}>
				<div style={{
                        'backgroundImage': `url('${props.product.images}')`,
                    }} className="card">
					
				</div>
			</Link>

			<div>
				<h3>
					<Link className="navMenu" to={`/product/${props.product.id}`}>{props.product.name}</Link>
				</h3>
				<p>
					{props.product.Prices} $
				</p>
				<Link className="navMenu" to={`/product/${props.product.id}`}>
				<div className="button"> View</div>
				</Link>
			</div>
		</div>
	)
}

export default ProductCard;