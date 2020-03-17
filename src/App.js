import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { carReducer } from "./reducers/carReducer";

const App = ({ car, additionalFeatures, additionalPrice }) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
				<div className="box">
					<Header car={car} />
					<AddedFeatures car={car} />
				</div>
				<div className="box">
					<AdditionalFeatures additionalFeatures={additionalFeatures} />
					<Total car={car} additionalPrice={additionalPrice} />
				</div>
			</div>
  );
};

export default App;
