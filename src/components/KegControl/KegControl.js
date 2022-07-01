import React, { Component } from 'react'
import KegDetails from '../KegDetails/KegDetails';
import Edit from '../Edit/Edit';
import NewKegForm from '../NewKegForm/NewKegForm';




  export class KegControl extends Component {
    constructor(props){
    super(props)
    this.state ={
      formVisibleOnPage :false,
      mainKegList:[],
      selectedKeg:null,
      edit:false
    };
    this.handleClick =this.handleClick.bind(this)
  }
  handleClick =()=>{
    if(this.state.selectedKeg!=null){
      this.setState({
        formVisibleOnPage:false,
        selectedKeg:null,
        edit:false
      });
    } else{
      this.setState(prevState =>(
        {
          formVisibleOnPage:!prevState.formVisibleOnPage
        }
      ));
    }
  }
  handleAddingNewKegToList =(newKeg)=>{
    const  newMainKegList =this.state.mainKegList.concat(newKeg);
    this.setState({
      mainKegList : newMainKegList,
      formVisibleOnPage:false
    });
  }

  handleDeletionKeg =(id)=>{
    const newMainKegList =this.state.mainKegList.filter(keg=>keg.id!==id);
    this.setState({
      mainKegList:newMainKegList,
      selectedKeg:null
    });
  }
  handleChangeSelectedKeg =(id)=>{
    const selectedKeg =this.state.mainKegList.filter(keg=>keg.id===id)[0];
    this.setState({
      selectedKeg:selectedKeg
    });
  }
  handleEditClick=()=>{
    this.setState({edit:true});
  }
  handleEditKegInList=(kegToBeEdited)=>{
    const editedmainKegList =this.state.mainKegList
    .fileter(keg=>keg.id!==this.state.selectedKeg.id)
    .concat(kegToBeEdited);
    this.setState({
      mainKegList:editedmainKegList,
      edit:false,
      selectedKeg:null
    });
  }
    render() {
    
    
      let currentlyVisibleState =null;
      let buttonText =null;
      if (this.state.edit ) {      
        currentlyVisibleState = <Edit keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
        buttonText = "Return to Keg List";
      } else if (this.state.selectedKeg != null) {
        currentlyVisibleState = 
        <KegDetails 
        keg = {this.state.selectedKeg} 
        onClickingDelete = {this.handleDeletingKeg} 
        onClickingEdit = {this.handleEditClick} 
        onClickingDecrement = {this.handleDecrementingPints} />

        buttonText = "Return to Keg List";
      } else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}  />

        buttonText = "Return to Keg List";
      } else {
        // currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg} />
      
        // buttonText = "Add Keg";
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}> {buttonText}</button>
        </React.Fragment>
      )
    }
  }

export default KegControl