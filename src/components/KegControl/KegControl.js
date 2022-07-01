import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { Component } from 'react'
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
  handleChangingSelectedKeg =(id)=>{
    const selectedKeg =this.state.mainKegList.filter(keg=>keg.id===id)[0];
    this.setState({
      selectedKeg:selectedKeg
    });
  }
  render() {
    let currentlyVisibleState =null;
    let buttonText =null;
    return (
      <div>KegControl</div>
    )
  }
}

export default KegControl