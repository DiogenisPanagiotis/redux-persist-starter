import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'

class Landing extends Component {

	handleClick = () => {
	  	const { increment } = this.props.actions
	  	increment()
	}
	
	render() {
	  	let { count } = this.props.incrementReducer
	  	console.log(this.props)
	    return (
	      	<div className="jumbotron">
	        	<h2>Count: {count}</h2>
	        	<hr/>
	        	<button 
		        	onClick={() => this.handleClick()} 
		        	type="button" 
		        	className="btn btn-primary">
		        	Increment
	        	</button>
	      	</div>
	    )
	}
}

const mapStateToProps = ({ incrementReducer }) => ({
	incrementReducer
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({ ...actions }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
