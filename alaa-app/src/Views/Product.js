import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from '../Components/Loader'
import {useAxiosGet} from '../Hooks/HttpRequests'

function Product (){
	const {id} = useParams()
	const url = `https://5f6612b843662800168e729f.mockapi.io/TestResource/${id}`
	let product = useAxiosGet(url)
	let content = null
	

	if (product.error){
		content = <p> There is a problem please try again later.</p>
	}

	if (product.loading){
		content= <Loader/>
	}

	if (product.data){
		content = 
		<div className="parent">
			<div>
				<h1>
		             {product.data.name}
		        </h1>
	        </div>
	        <div>
				<img className="productImg" src={product.data.images} alt={product.data.name}/>
	        </div>
	        <div>
				{product.data.Prices} $
	        </div>
	        <div>
				{product.data.Description}
	        </div>
        </div>
	}

	return (
		<div>
			{content}
		</div>
	)
	
}

export default Product