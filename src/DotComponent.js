import React,{ Component} from 'react';

class DotComponent extends Component {
  constructor(props) {
    super(props);
    this.state ={
      width:"",
      height:"",
      col:"",
      color:"",
      radius:"",
      
    }
  }




  handleChangewidth = (e) =>{
    e.preventDefault();
    this.setState (
      {
        width : e.target.value,
      }
    )
    console.log(this.state.width)


  }
  handleChangeheight = (e) =>{
    e.preventDefault();
    this.setState (
      {
        height : e.target.value,
      }
    )
    console.log(this.state.height)

  }


  handleChangecol = (e) =>{
    e.preventDefault();
    this.setState (
      {
        col : e.target.value,
      }
    )
    console.log(this.state.col)

  }
  

  handleChangecolor = (e) =>{
    e.preventDefault();
    this.setState (
      {
        color : e.target.value,
      }
    )
    console.log(this.state.col)

  }

  handleChangeradius = (e) =>{
    e.preventDefault();
    this.setState (
      {
        radius : e.target.value,
      }
    )
    console.log(this.state.radius)

  }

  handleClickdefault = () =>{
    document.getElementById('gridc').style.width = "window.screen.width"
  }

  handleClick = () =>{
    const {width,height} = this.state;
    console.log(this.state.width, this.state.height)
    //document.getElementById("gridc").style.resize = "both";
    document.getElementById("gridc").style.width = this.state.width 
    document.getElementById("gridc").style.height = this.state.height 

    // if((this.state.width || this.state.height) == ""){
    //   alert("please enter both")
    // }
    // else {
    // document.getElementById("gridc").style.width = this.state.width 
    // document.getElementById("gridc").style.height = this.state.height 

    // }
    //console.log(c)
  }

  handleClickCol = () =>{
    let column2 = document.createElement('div');
    document.getElementById('gridc').appendChild(column2);
    column2.className="grid-items";
    //document.getElementById("gridc").style.gridTemplateColumns= "10px 10px 10px 10px 10px 10px"

    //column2.classList.add("grid-items")


  }
  handleClickColor = () =>{
    document.getElementById("gridc").style.background = this.state.color 
  }

  handleClickRadius = () =>{
  
   document.getElementById("gridc").style.setProperty('grid-template-columns', `repeat(${5}, ${this.state.radius})`);
   document.getElementById("gridc").style.setProperty('grid-template-rows', `repeat(${5}, ${this.state.radius})`);
  }
  render (){
    return (
      <>
      <div id = "gridc"className="grid-container">
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
        <div className="grid-items"></div>
      
        
        
      
      </div>
      <input type = "text" onChange = {this.handleChangewidth} value={this.state.width} placeholder="please enter the width" required/>
      <input type = "text" onChange = {this.handleChangeheight} value={this.state.height} placeholder="please enter the width"/>
      
      <button onClick={this.handleClick} > resize</button>      
      <button onClick={this.handleClickdefault} > default resize</button> 
      <input type = "number" onChange = {this.handleChangecol} value={this.state.col} placeholder="please enter the number of colums"/>
      <button onClick={this.handleClickCol} > column button </button> 

      <input type = "text" onChange = {this.handleChangecolor} value={this.state.color} placeholder="please enter the number of colums"/>

      <button onClick={this.handleClickColor} > color button </button> 
      <form onSubmit={this.handleChangeradius}>
      <input type = "text" onChange = {this.handleChangeradius} value={this.state.radius} placeholder="please enter the number of colums" required/>
      <button type="submit" onClick={this.handleClickRadius} > radius button </button> 
      </form>


      </>
    )
  }
}

export default DotComponent;