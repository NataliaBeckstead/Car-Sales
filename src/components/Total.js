import React from 'react';
import { connect } from 'react-redux';

const Total = ({ car, additionalPrice }) => {
	return (
		<div className="content">
			<h4>Total Amount: <span className="title is-3 hotpink">${car.price + additionalPrice}</span></h4>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		car: state.car,
		additionalPrice: state.additionalPrice
	};
};

export default connect(mapStateToProps, {})(Total);