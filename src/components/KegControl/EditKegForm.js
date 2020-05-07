import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

function EditKegForm (props) {

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value, 
      brand: event.target.brand.value,
      description: event.target.description.value, 
      alcoholContent: event.target.alcoholContent.value, 
      price: event.target.price.value, 
      remainingPints: props.keg.remainingPints,
      id: props.keg.id
    });
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
};

export default EditKegForm;