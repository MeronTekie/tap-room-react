import React, { Component } from 'react'

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
  render() {
    return (
      <div>KegControl</div>
    )
  }
}

export default KegControl