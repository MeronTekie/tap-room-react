import React from "react";
import Keg from '../Keg.js/Keg'
import PropTypes from "prop-types";

const List = (props) => {
	return (
		<div>
			{props.list.map((keg) => (
				<Keg
				  whenKegClicked={props.onSelect}
					name={keg.name}
          country={keg.country}
          price={keg.price}
					type={keg.type}
					alcoholContent={keg.alcoholContent}
          pints={keg.pints}
					id={keg.id}
					key={keg.id}
				/>
			))}
		</div>
	);
};
List.propTypes = {
	list: PropTypes.array,
	onSelect: PropTypes.func,
};

export default List;
