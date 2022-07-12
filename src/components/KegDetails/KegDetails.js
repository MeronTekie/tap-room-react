import React from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.css';
import './KegDetails.css'


const KegDetails = (props) => {
	const { keg, onClickingDelete,onClickingDecrement } = props;
	
	return (
		<React.Fragment>
				<div className="col-3 card-1">
					<div >
					    <h1 className="detail"> Details</h1>
						<div className="col-8 text">
							<h3>Name:{keg.name}</h3>
							<h3>Type:{keg.type}</h3>
							<h3>Price:{keg.price}</h3>
							<h3>Alcohol:{keg.alcoholContent} % </h3>
						</div>
						<div className="row-12">
							<div className="buttons-2">
								<div >
									<button className="btn btn-primary col-6" onClick={props.onClickingEdit}>Update </button> 
									<button  className="btn btn-success col-6" onClick={()=>onClickingDecrement(keg.id)}>Sell Beer</button>
								</div>
								<div>
									<button  className="btn btn-danger col-12" onClick={() => onClickingDelete(keg.id)}>Delete</button>
								</div>
							</div>
						</div>
					</div>
		   	</div>
		</React.Fragment>
	);
};
KegDetails.propTypes = {
	keg: PropTypes.object,
	onClickingDelete: PropTypes.func,
	onClickingEdit: PropTypes.func,
	onClickingDecrement: PropTypes.func,
};

export default KegDetails;
