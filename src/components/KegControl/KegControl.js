import React, { Component } from 'react'

export class KegControl extends Component {
  constructor(props){
    super(props)
    this.state ={
      formVisibleOnPage :false,
      mainKegList:[],
      selectedKeg:null,
      editing:false
    };
    this.handleClick =this.handleClick.bind(this)
  }
  render() {
    return (
      <div>KegControl</div>
    )
  }
}

export default KegControl