import React, { Component, Children } from 'react';

class DotComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      height: "",
      col: "",
      color: "",
      dotcolor: "",
      radius: "",
      checkers:""

    }
  }




  handleChangewidth = (e) => {
    e.preventDefault();
    this.setState(
      {
        width: e.target.value,
      }
    )
    console.log(this.state.width)


  }
  handleChangeheight = (e) => {
    e.preventDefault();
    this.setState(
      {
        height: e.target.value,
      }
    )
    console.log(this.state.height)

  }


  handleChangecol = (e) => {
    e.preventDefault();
    this.setState(
      {
        col: e.target.value,
      }
    )
    console.log(this.state.col)

  }


  handleChangecolor = (e) => {
    e.preventDefault();
    this.setState(
      {
        color: e.target.value,
      }
    )
    console.log(this.state.col)

  }

  handleChangedotcolor = (e) => {
    e.preventDefault();
    this.setState(
      {
        dotcolor: e.target.value,
      }
    )
    console.log(this.state.col)

  }

  handleChangeradius = (e) => {
    e.preventDefault();
    this.setState(
      {
        radius: e.target.value,
      }
    )
    console.log(this.state.radius)

  }

  handleClickdefault = () => {
    document.getElementById('gridc').style.width = "window.screen.width"
  }

  handleClick = (e) => {
    e.preventDefault();
    const { width, height } = this.state;
    console.log(this.state.width, this.state.height)
    //document.getElementById("gridc").style.resize = "both";
    document.getElementById("gridc").style.width = this.state.width
    document.getElementById("gridc").style.height = this.state.height

    if ((this.state.width || this.state.height) == "") {
      document.getElementById("gridc").style.width = this.state.width

    }
    // else {
    // document.getElementById("gridc").style.width = this.state.width 
    // document.getElementById("gridc").style.height = this.state.height 

    // }
    //console.log(c)
  }

  handleClickCol = () => {
    let column2 = document.createElement('div');
    document.getElementById('gridc').appendChild(column2);
    column2.className = "grid-items";
    //document.getElementById("gridc").style.gridTemplateColumns= "10px 10px 10px 10px 10px 10px"

    //column2.classList.add("grid-items")


  }
  handleClickColor = (e) => {

    e.preventDefault();

    document.getElementById("gridc").style.background = this.state.color
    var colordots = document.getElementsByClassName('grid-items');
    //var result = "document.getElementsByClassName('orange juice')";

    // for (var i=0, len=colordots.length|0; i<len; i=i+1|0) {
    //   var el = document.getElementsByClassName("grid-items")[i];
    //   el.style.backgroundColor = "#FFCC00";
    // }

    // var el = document.getElementsByClassName("grid-items")[0];
    // el.style.backgroundColor = "#FFCC00";
    //document.getElementByClassName("grid-items").style.background = this.state.color 

  }


  handleClickdotColor = (e) => {
    e.preventDefault();

    var colordots = document.getElementsByClassName('grid-items');

    for (var i = 0, len = colordots.length | 0; i < len; i = i + 1 | 0) {
      var el = document.getElementsByClassName("grid-items")[i];
      el.style.backgroundColor = this.state.dotcolor;
    }

  }

  handleClickRadius = (e) => {
    e.preventDefault();

    document.getElementById("gridc").style.setProperty('grid-template-columns', `repeat(${5}, ${this.state.radius})`);
    document.getElementById("gridc").style.setProperty('grid-template-rows', `repeat(${5}, ${this.state.radius})`);
  }


  handlecheckers = () =>{
    var container_div = document.getElementById('gridc');
    var count = container_div.getElementsByTagName('div').length;
    for (var i = 0, len = count | 0; i < len; i = i + 1 | 0) {
      if(i % 2 == 0){
        console.log(i,"even")
      }
      else{
        console.log(i,"odd")
        var el = document.getElementsByClassName("grid-items")[i];
      el.style.backgroundColor = "red";
        // var element = document.getElementById("myDIV");
        // element.classList.add("mystyle");
      }
    }

  }


  handleodd = () =>{
    var container_div = document.getElementById('gridc');
    var count = container_div.getElementsByTagName('div').length;
    for (var i = 0, len = count | 0; i < len; i = i + 1 | 0) {
      if(i==6||i==8||i==16||i==18){
        var el = document.getElementsByClassName("grid-items")[i];
      el.style.backgroundColor = "black";
      }
      else {
        var el = document.getElementsByClassName("grid-items")[i];
        el.style.backgroundColor = "white";

      }
     
    }

  }


  handlegrid = () =>{
    var container_div = document.getElementById('gridc');
    var count = container_div.getElementsByTagName('div').length;
    for (var i = 0, len = count | 0; i < len; i = i + 1 | 0) { 
      var el = document.getElementsByClassName("grid-items")[i];
      el.style.backgroundColor = "black";
      }

  }



  render() {
    return (
      <>
        <div className="formelements">
          <form  onSubmit={this.handleClick}>
            <div className = "boxsize">
            <input type="text" onChange={this.handleChangewidth} value={this.state.width} title="Please enter the value in px eg:10px" placeholder="please enter the width" />
            <input type="text" onChange={this.handleChangeheight} value={this.state.height} title="Please enter the value in px eg:10px" placeholder="please enter the height" />
            </div>
            <button className="addbutton" type="submit" > resize</button>
          </form>
          {/* <form onSubmit={this.handleClickCol}>
            <input type="number" onChange={this.handleChangecol} value={this.state.col} placeholder="please enter the number of colums" required />
            <button className="addbutton" type="submit" onClick={this.handleClickCol} > column button </button>
          </form> */}
          <div className="colorchange">
          <form className="boxcolorform"onSubmit={this.handleClickColor} >
            <input className = "boxcolor"type="text" onChange={this.handleChangecolor} value={this.state.color} placeholder="please enter the color you want to change" required />
            <button className="addbutton" type="submit" onClick={this.handleClickColor} >Box color  button </button>
          </form>
          <form className="boxcolorform" onSubmit={this.handleClickdotColor} >
            <input className = "boxcolor" type="text" onChange={this.handleChangedotcolor} value={this.state.dotcolor} placeholder="please enter the color you want to change" required />
            <button className="addbutton" type="submit" onClick={this.handleClickdotColor} >circle color button </button>
          </form>
          </div>
          <form className="radiusclass"onSubmit={this.handleChangeradius}>
            <input className="radius" type="text" onChange={this.handleChangeradius} value={this.state.radius} title="Please enter the value in px eg:10px" placeholder="please enter the radius for the circle" required />
            <button className="addbutton" type="submit" onClick={this.handleClickRadius} > radius button </button>
          </form>
        </div>
        <div className="views">
          <button className="addbutton" type="submit" onClick={this.handlegrid} > Grid View </button>
          <button className="addbutton" type="submit" onClick={this.handlecheckers} > checkers view</button>
          <button className="addbutton" type="submit" onClick={this.handleodd} > Odd View </button>
        </div>
        <div id="gridc" className="grid-container">
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
       

      </>
    )
  }
}

export default DotComponent;