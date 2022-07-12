import React from "react";
import ReusableForm from "../ReusableForm/ReusableForm";
import PropTypes from "prop-types";

function Edit (props){
	const { keg } = props;
	function editKeg(event) {
		event.preventDefault();
		props.editKeg({
			name: event.target.name.value,
			brandName: event.target.brandName.value,
			type: event.target.type.value,
			alcoholContent: event.target.alcoholContent.value,
			price: event.target.price.value,
			pints:props.pint,
			id: keg.id,
		});
	};
	return (
		<div>
			<React.Fragment>
				<ReusableForm
					formSubmissionHandler={editKeg}
					buttonText="Edit the Keg information"
				/>
			</React.Fragment>
		</div>
	);
};
Edit.propTypes = {
	editKeg: PropTypes.func,
};

export default Edit;
