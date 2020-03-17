import React from 'react';
import { connect } from 'react-redux';

const Header = ({ car }) => {
  return (
    <>
      <figure className="image is-4by3"> 
      {/* bulma image, title, subtitle styling */}
      {/* https://bulma.io/documentation/components/card/  */}
        <img src={car.image} alt={car.name} />
      </figure>
      <h2 className="title is-3">{car.name}</h2>
      <p className="subtitle is-5">Amount: <span className="title is-3">${car.price}</span></p>
    </>
  );
};

const mapStateToProps = state => {
  return { car: state.car };
};

export default connect(mapStateToProps, {})(Header);