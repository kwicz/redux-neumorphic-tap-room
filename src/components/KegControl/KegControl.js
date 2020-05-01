import React from "react";
import KegDetails from "./KegDetails";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [
        {
          name: "Banana Belgium Ale",
          brand: "Solovewicz Brewing",
          description: "Fruity, but in a canine kind of way.",
          alcoholContent: "4%",
          price: 5,
          remainingPints: 0,
          key: 1,
          id: 1
        },
        {
          name: "Sneaky Sasquatch Stout",
          brand: "Bigfoot Fermentorium",
          description: "Pungent.",
          alcoholContent: "8%",
          price: 11,
          remainingPints: 124,
          key: 2,
          id: 2
        },
        {
          name: "Calvin & Hobbes Pale Ale",
          brand: "Watterson Werks",
          description: "Blonde with notes of childhood.",
          alcoholContent: "5%",
          price: 6,
          remainingPints: 124,
          key: 3,
          id: 3
        },
        {
          name: "Goat Lords Cider",
          brand: "Wild Animal Werks",
          description: "Maaahhhhy favorite cider.",
          alcoholContent: "4%",
          price: 5,
          remainingPints: 124,
          key: 4,
          id: 4
        },
        {
          name: "Dinosaur Double IPA",
          brand: "Limited Edition.  Try it before it goes exctinct.",
          description: "RAWR.",
          alcoholContent: "9%",
          price: 8,
          remainingPints: 124,
          key: 5,
          id: 5
        },
        {
          name: "Mary Poppins Hard Kombucha",
          brand: "Sister Suffragettes, inc.",
          description: "Nearly perfect in every way.",
          alcoholContent: "3%",
          price: 7,
          remainingPints: 124,
          key: 6,
          id: 6
        }
      ],
      selectedKeg: null,
      editing: false
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList});
    this.setState({formVisibleOnPage: false});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
        masterKegList: editedMasterKegList,
        editing: false,
        selectedKeg: null
      });
  }

  handleOrderingPint = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id ===id)[0];
    const updatedPints = selectedKeg.remainingPints - 1;
    const updatedKeg = {...selectedKeg, remainingPints: updatedPints};
    const kegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: [...kegList, updatedKeg],
      selectedKeg: updatedKeg
    });
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
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id ===id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({masterKegList: newMasterKegList});
    this.setState({selectedKeg: null});
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
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
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonIcon = <ArrowBackIos />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList}
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



export default KegControl;