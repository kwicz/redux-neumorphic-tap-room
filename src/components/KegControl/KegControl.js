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
import { SELECTED_KEG } from "../../actions/ActionTypes";


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    this.setState({
      editing: false,
    });   
  }

  handleOrderingPint = (id) => {
    const { dispatch } = this.props;
    const action = a.buyPint(id);
    dispatch(action);
  // this.setState({
  //   selectedKeg: updatedKeg
  // })


  // const selectedKeg = this.state.masterKegList.filter(keg => keg.id ===id)[0];
  // const updatedPints = selectedKeg.remainingPints - 1;
  // const updatedKeg = {...selectedKeg, remainingPints: updatedPints};
  // const kegList = this.state.masterKegList.filter(keg => keg.id !== id);
  // this.setState({
  //   masterKegList: [...kegList, updatedKeg],
  //   selectedKeg: updatedKeg
  // });
  }

  handleQuickOrder = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id ===id)[0];
    const updatedPints = selectedKeg.remainingPints - 1;
    const updatedKeg = {...selectedKeg, remainingPints: updatedPints};
    const kegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: [...kegList, updatedKeg],
      selectedKeg: null
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList.filter(keg => keg.id ===id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    const action2 = a.selectedKeg();
    dispatch(action2);  
  }

  handleClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
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
        /* Basic styling and alignment */
      /* For Neumorphism Effect */
      backgroundColor: "#E0E5EC",
      boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5)"
    }
    let currentlyVisibleState = null;
    let buttonText = null;
    let buttonIcon = null;

    if (this.state.editing ) {      
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonIcon = <ArrowBackIos />;
      buttonText = "Return to Keg Details";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetails keg = {this.state.selectedKeg} 
      onClickingOrder = {this.handleOrderingPint}
      onClickingDelete = {this.handleDeletingKeg}
      onClickingEdit = {this.handleEditClick} />
      buttonIcon = <ArrowBackIos />;
      buttonText = "Return to Keg List";
    }
    else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonIcon = <ArrowBackIos />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.props.masterKegList}
      onClickingOrder= {this.handleQuickOrder}
      onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add A Keg";
      buttonIcon = <Add />;
    }
    return (
      <React.Fragment>
        <Button onClick={this.handleClick} style={styledButton}>
          {buttonIcon}
          {buttonText}
        </Button>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;