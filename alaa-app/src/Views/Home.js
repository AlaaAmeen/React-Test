import React, {useState, useEffect} from 'react';
import axios from 'axios'
import HelloWorld from '../Components/HelloWorld';
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import {useAxiosGet} from '../Hooks/HttpRequests'

function Home (){
	const url = `https://5f6612b843662800168e729f.mockapi.io/TestResource?page=1&limit=10`
	let products = useAxiosGet(url)
	let content = null


	if (products.error){
		content = <p> There is a problem please try again later.</p>
	}

	if (products.loading){
		content= <Loader/>
	}

	if (products.data){
		content = 
		products.data.map((product) => 
			<div key={product.id}>
				<ProductCard product={product} />
			</div>
		)
	}

	return(
		<div>
			<HelloWorld firstName= "Alaa"/>
			<h1>
	              Best Seller
	        </h1>
	        {content}
        </div>
	)
}

export default Home