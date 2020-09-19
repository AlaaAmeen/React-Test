import React, {useState} from 'react';


function Counter () {

	const [count, setCounter] = useState(0);

	return (

		<div>

			<h1>{count}</h1>
			<h1 onClick = {() => setCounter(count + 1)} >
				plus
			</h1>
			<h1 onClick = {() => setCounter(count - 1)} >
				Minus
			</h1>

		</div>
	)

}

export default Counter;