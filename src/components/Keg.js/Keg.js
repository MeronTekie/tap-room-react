import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import "./Keg.css";

const Keg = (props) => {
	return (
		<React.Fragment>
			<div className="row-12">
				<div className="col-4 card space">
					<div onClick={() => props.whenKegClicked(props.id)}>
						<div className="col-12 title">{props.name}</div>
						<div className="col-12 content">
							<p>
								<strong>Country: </strong> {props.country}
							</p>
							<p>
								<strong>Alcohol Content: </strong> {props.alcoholContent} %
							</p>
							<p>
								<strong> Price: </strong> {props.price}.99 USD
							</p>
							<br />
							<button className="btn btn-dark buttons">
								{props.pints} /124 pints
							</button>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
Keg.propTypes = {
	name: PropTypes.string.isRequired,
	brandName: PropTypes.string.isRequired,
	alcoholContent: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	id: PropTypes.string,
	whenKegClicked: PropTypes.func,
};

export default Keg;
