import React from "react";
import KegDetails from "./KegDetails";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from '../../actions';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

class KegControl extends React.Component {

  // Allows user to navigate to Add New Keg Page
  handleClick = () => {
    const { dispatch } = this.props;
    console.log("handleClick Props: ", this.props)
    const action = a.toggleForm();
    dispatch(action);
    // const action2 = a.editing();
    // dispatch(action2);
    // const action3 = a.selectedKeg();
    // dispatch(action3);
  }

  // Allows users to add a new Keg to the MasterKegList object
  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  // Allows user to handle an order from the landing page.
  handleQuickOrder = (id) => {
    const { dispatch, masterKegList } = this.props;
    const selectedKeg = masterKegList[id];
    const action = a.buyPint(selectedKeg);
    dispatch(action);
  }

  // Allows user to view details of a selected keg
  handleChangingSelectedKeg = (id) => {
    const { dispatch, masterKegList } = this.props;
    const action = a.selectedKeg(masterKegList[id]);
    dispatch (action);
  }

  // Allows user to view KegList
  handleGoToKegList = () => {
    const { dispatch } = this.props;
    const action = a.selectedKeg();
    dispatch (action);
  }


  //*************I'm leaving this bit of commented code here because I'd love to discuss it in a meeting.  I can't figure out how to get this one to work. */

  // Allows user to buy a pint from the details page.
  handleOrderingPint = (id) => {
    const { dispatch, masterKegList } = this.props;
    console.log("handle Ordering Pint state: ", this.props);
    const action = a.buyPint(masterKegList[id]);
    dispatch(action);
    const action2 = a.selectedKeg(masterKegList[id]);
    console.log("updatedKeg: ", action2)
    dispatch(action);
    console.log("masterKegList new state: ", masterKegList[id].remainingPints);
    console.log("selectedKeg state: ", this.props.selectedKeg.remainingPints);
  }

  // Allows user to navigate to the Update Keg form.
  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.editing();
    dispatch(action);
  }

  // Allows user to navigate to the Update Keg form.
  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.editing();
    dispatch(action);
  }

  // Allows user to change the keg details in the MasterKegList object.
  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);  
  }

  // Allows user to remove a keg from the tap
  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    const action2 = a.selectedKeg();
    dispatch(action2);  
  }

  render() {
    const styledButton = {
      color: 'rgb(45,45,45,0.6)',
      maxWidth: 345,
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius:4,
      width:150,
      backgroundColor: "#E0E5EC",
      boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5)"
    }
    let currentlyVisibleState = null;
    let buttonText = null;
    let buttonIcon = null;
    let buttonAction = null;
    console.log("store state at render: ", this.props);

    // decide which view to display
    if (this.props.editing ) {      // display editing view
      currentlyVisibleState = <EditKegForm 
        keg = {this.props.selectedKeg} 
        onEditKeg = {this.handleEditingKegInList} />
      buttonIcon = <ArrowBackIos />;
      buttonText = "Return to Keg Details";
      /////// This button action not working ///////
      buttonAction = this.handleChangingSelectedKeg;
    } else if (this.props.selectedKeg != null) {    // display keg details view
      console.log("render selectedKeg state: ", this.props.selectedKeg)
      currentlyVisibleState = <KegDetails keg = {this.props.selectedKeg} 
        onClickingOrder = {this.handleOrderingPint}
        onClickingDelete = {this.handleDeletingKeg}
        onClickingEdit = {this.handleEditClick} />
      buttonIcon = <ArrowBackIos />;
      buttonText = "Return to Keg List";
      buttonAction = this.handleGoToKegList;
    } else if (this.props.formVisibleOnPage) {      // displayNewKegForm 
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonIcon = <ArrowBackIos />;
      buttonText = "Return to Keg List";
      buttonAction = this.handleClick;
    } else {        // display landing page
      currentlyVisibleState = <KegList kegList={this.props.masterKegList}
        onClickingOrder= {this.handleQuickOrder}
        onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add A Keg";
      buttonIcon = <Add />;
      buttonAction = this.handleClick;
    }
    return (
      <React.Fragment>
        <Button onClick={buttonAction} style={styledButton}>
          {buttonIcon}
          {buttonText}
        </Button>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  editing: PropTypes.bool,
  selectedKeg: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing,
    selectedKeg: state.selectedKeg
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;