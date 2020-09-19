import React, {Component} from 'react';

/*function HelloWorld (props){
	return (

		<h1>Hello {props.firstName} !</h1>
	)

}*/

class HelloWorld extends Component {
	render(){
		return (
			<h3>
				Hello {this.props.firstName} !
			</h3>
		)
	}
}

export default HelloWorld;