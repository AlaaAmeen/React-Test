import React, {useState, useEffect} from 'react';
import axios from 'axios';

export function useAxiosGet(url){

	const [request, setRequest] = useState({
		loading: false,
		data: null,
		error: false

		})

		useEffect(() => {   //without it the request and the response will be generated multiple times
		setRequest({
			loading: true,
			data: null,
			error: false
		})
		axios.get(url).then(response => {setRequest({
			loading: false,
			data: response.data,
			error: false
			})
		})
		.catch(() => {
			setRequest({
			loading: false,
			data: null,
			error: true
			})
		})
	}, [url])  // means if the url changed, re-run the useEffect
	
	return request
}