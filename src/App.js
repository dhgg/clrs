import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import rainbow from './rainbow.svg'
import './App.css'
import redheart from './redheart.svg'
import Image from 'react-image-resizer';
const rgbToHex = require('rgb-to-hex');
const hexToRgb = require('hex-to-rgb');


function randint(range){
  return Math.floor(Math.random() * range)
}

class Rainbow extends Component {
  constructor(props){
    super(props);
    this.state = {
      r: 34,
      g: 34,
      b: 34,
      rgb: 'rgb(34, 34, 34)'
    }
  }
  rainbowClick() {
    var rx = (randint(255));
    var gx = (randint(255));
    var bx = (randint(255));
    var rgbx = ('rgb(' + rx + ', ' + gx + ', ' + bx + ')');
    this.setState({
      r: rx,
      g: gx,
      b: bx,
      rgb: 'rgb(' + this.state.r + ", " + this.state.g + ", " + this.state.b + ')'
    })
    document.body.style.background = rgbx;
    document.getElementById("inputbox2").value = rgbToHex(rgbx);
    document.getElementById("myRange1").value = rx;
    document.getElementById("myRange2").value = gx;
    document.getElementById("myRange3").value = bx;
    document.getElementById("r1").value = rx;
    document.getElementById("r2").value = gx;
    document.getElementById("r3").value = bx;
  }

  hexCheck() {
    if (document.getElementById("inputbox2").value.length === 6){
    var rgba = hexToRgb(document.getElementById("inputbox2").value)
     this.setState({
        r: rgba[0],
        g: rgba[1],
        b: rgba[2],
        rgb: 'rgb(' + this.state.r + ", " + this.state.g + ", " + this.state.b + ')'

      })

      document.body.style.background = "#" + document.getElementById("inputbox2").value;
      // console.log("red:",this.state.rgb[0]);
      document.getElementById("myRange1").value = rgba[0];
      document.getElementById("myRange2").value = rgba[1];
      document.getElementById("myRange3").value = rgba[2];
      document.getElementById("r1").value = rgba[0];
      document.getElementById("r2").value = rgba[1];
      document.getElementById("r3").value = rgba[2];

    }
  }

  rgbSlide() {
    this.setState({
      r: document.getElementById("myRange1").value,
      g: document.getElementById("myRange2").value,
      b: document.getElementById("myRange3").value,
      rgb: 'rgb(' + this.state.r + ", " + this.state.g + ", " + this.state.b + ')'
    })
    document.body.style.background = 'rgb(' + document.getElementById("myRange1").value + ', ' + document.getElementById("myRange2").value + ', ' + document.getElementById("myRange3").value + ')';
    document.getElementById("inputbox2").value = rgbToHex(this.state.rgb);
    document.getElementById("r1").value = document.getElementById("myRange1").value;
    document.getElementById("r2").value = document.getElementById("myRange2").value;
    document.getElementById("r3").value = document.getElementById("myRange3").value;
  }

  overSlide(){
    if (document.getElementById("r1").value > 255) {
      document.getElementById("r1").value = this.state.r;
      return;
    }
    else if (document.getElementById("r2").value > 255) {
      document.getElementById("r2").value = this.state.g;
      return;
    }
    else if (document.getElementById("r3").value > 255) {
      document.getElementById("r3").value = this.state.b;
      return;
    }
    else if (document.getElementById("r1").value < 0) {
      document.getElementById("r1").value = 0;
    }
    else if (document.getElementById("r2").value < 0) {
      document.getElementById("r2").value = 0;
    }
    else if (document.getElementById("r3").value < 0) {
      document.getElementById("r3").value = 0;
    }
  if(document.getElementById("r1").value.length===0){
    document.getElementById("r1").value=0;
  }
  if(document.getElementById("r2").value.length===0){
    document.getElementById("r2").value=0;
  }
  if(document.getElementById("r3").value.length===0){
    document.getElementById("r3").value=0;
  }
  if(document.getElementById("r1").value.charAt(0)==='0' && document.getElementById("r1").value.length > 1){
    document.getElementById("r1").value = parseInt(document.getElementById("r1").value, 10);
  }
  if(document.getElementById("r2").value.charAt(0)==='0' && document.getElementById("r2").value.length > 1){
    document.getElementById("r2").value = parseInt(document.getElementById("r2").value, 10);
  }
  if(document.getElementById("r3").value.charAt(0)==='0' && document.getElementById("r3").value.length > 1){
    document.getElementById("r3").value = parseInt(document.getElementById("r3").value, 10);
  }
    document.body.style.background = 'rgb(' + document.getElementById("r1").value + ', ' + document.getElementById("r2").value + ', ' + document.getElementById("r3").value + ')'
    this.setState({
      rgb:'rgb(' + document.getElementById("r1").value + ', ' + document.getElementById("r2").value + ', ' + document.getElementById("r3").value + ')',
      r: document.getElementById("r1").value,
      g: document.getElementById("r2").value,
      b: document.getElementById("r3").value

    })
    document.getElementById("myRange1").value = document.getElementById("r1").value;
    document.getElementById("myRange2").value = document.getElementById("r2").value;
    document.getElementById("myRange3").value = document.getElementById("r3").value;
    document.getElementById("inputbox2").value = rgbToHex('rgb(' + document.getElementById("r1").value + ', ' + document.getElementById("r2").value + ', ' + document.getElementById("r3").value + ')')

}


  render(){
    return(
      <div>
      <img onClick={() => this.rainbowClick()} src={rainbow} className="App-logo" alt="rainbow" />
      <br/><br/><br/><br/>
      <div><input id="inputbox2" type="text" onChange={() => this.hexCheck()} maxLength="6"/></div>
      <div className="rgbslider">
      <br/><br/><br/>
      <input type="range" onChange={() => this.rgbSlide()} min={0} max={255} defaultValue={34} id="myRange1" />
      <input type="number" onChange={() => this.overSlide()} min={0} max={255} id="r1"/> <br/><br/>
      <input type="range" onChange={() => this.rgbSlide()} min={0} max={255} defaultValue={34} id="myRange2" />
      <input type="number" onChange={() => this.overSlide()} min={0} max={255} id="r2"/> <br/><br/>
      <input type="range" onChange={() => this.rgbSlide()} min={0} max={255} defaultValue={34} id="myRange3" />
      <input type="number" onChange={() => this.overSlide()} min={0} max={255} id="r3"/> <br/><br/>
      </div>
      </div>
    )

  }

}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: "App"
    }
  }
  componentDidMount(){
    document.body.style.background = "#222";
    document.title = "clrs";
  }

  reClock(){
    this.setState({
      currentPage: "Clock"
    })
  }

  reCalc(){
    this.setState({
      currentPage: "Calculator"
    })
  }

  render() {

    if(this.state.currentPage === "App"){
      return (
        <div>
        <div className="App">
          <p className="colorize">clrs</p>
          <div><Rainbow /></div>
          <br/>
          <br/>
          <br/>
          <button className="btn btn-danger" onClick={() => this.reClock()}>⌛</button><button className="btn btn-warning" onClick={() => this.reCalc()}>✏️</button>
        </div>


        <div className="foot" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', fontSize: 15}}><span>made with&nbsp;</span><span><Image src={redheart} alt="redheart" height={23} width={23}/></span><span>&nbsp;in new york</span></div>

        </div>
      );
    }
    else if(this.state.currentPage === "Calculator"){
      document.body.style.background = '#222';
      return(<CalculatorPage/>)
    }
    else if(this.state.currentPage === "Clock"){
      document.body.style.background = '#222';
      return(<ClockPage/>)
    }
    }
  }

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date
    }
    setInterval(() => this.sleep(), 1000)
  }

sleep(){
  this.setState({
    date: new Date
  })
}

      render(){
        return(
            <div className="largeclock">{this.state.date.toLocaleTimeString()}</div>
        );
  }
}

class ClockPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      nowPage: "Clock"
    }
  }

  unClock(){
    this.setState({
      nowPage: "App"
    })
  }

  unClock2(){
    this.setState({
      nowPage: "Calculator"
    })
  }
  render(){

    if(this.state.nowPage === "Clock"){
      return(
        <div className="Clock">
          <div id="bigclock"><Clock /></div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <button className="btn btn-info" id="dabutton" onClick={() => this.unClock()}>🌈</button><button id="dabutton" className="btn btn-warning" onClick={() => this.unClock2()}>✏️</button>
          <br/><br/><br/>
          <div className="foot" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', fontSize: 15}}><span>made with&nbsp;</span><span><Image src={redheart} alt="redheart" height={23} width={23}/></span><span>&nbsp;in new york</span></div>


        </div>
      )
    }
  else if(this.state.nowPage === "Calculator"){
    return(<CalculatorPage/>)
  }
  else{
    return(<App />)
  }
  }

  }

class CalculatorPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      nowPage: "Calculator",
      buttonPressed: ""
    };
  }

  unCalc(){
    this.setState({
      nowPage: "App"
    })
  }

  unCalc2(){
    this.setState({
      nowPage: "Clock"
    })
  }


  onPress(event){
    document.getElementById("calcInput").value = document.getElementById("calcInput").value + event
    document.getElementById("calcInput").focus();
  }

  equals(){
    document.getElementById("calcInput").value = eval(document.getElementById("calcInput").value)
  }

  purge(){
    document.getElementById("calcInput").value = ""
  }



  render(){
    if(this.state.nowPage === "Calculator"){
      return(
        <div className="Calculator">

        <div className="calc">
        <br/><br/><br/><br/>
          <input type="text" id="calcInput"></input><br/>
          <button className="btn btn-default" id="calcButtons" onClick={() => this.onPress('1')}>1</button>
          <button className="btn btn-default" id="calcButtons" onClick={() => this.onPress('2')}>2</button>
          <button className="btn btn-default" id="calcButtons" onClick={() => this.onPress('3')}>3</button>
          <button className="btn btn-default" id="calcButtons" onClick={() => this.onPress('+')}>+</button><br/>
          <button className="btn btn-default" id="calcButtons" onClick={() => this.onPress('4')}>4</button>
          <button className="btn btn-default" id="calcButtons" onClick={() => this.onPress('5')}>5</button>
          <button className="btn btn-default" id="calcButtons" onClick={() => this.onPress('6')}>6</button>
          <button className="btn btn-default" id="calcButtons" onClick={() => this.onPress('-')}>-</button><br/>
          <button className="btn btn-default" id="calcButtons" onClick={() => this.onPress('7')}>7</button>
          <button className="btn btn-default" id="calcButtons" onClick={() => this.onPress('8')}>8</button>
          <button className="btn btn-default" id="calcButtons" onClick={() => this.onPress('9')}>9</button>
          <button className="btn btn-default" id="calcButtons" onClick={() => this.onPress('*')}>x</button><br/>
          <button className="btn btn-default" id="calcButtons" onClick={() => this.purge()}>C</button>
          <button className="btn btn-default" id="calcButtons" onClick={() => this.onPress('0')}>0</button>
          <button className="btn btn-default" id="calcButtons" onClick={() => this.equals()}>=</button>
          <button className="btn btn-default" id="calcButtons" onClick={() => this.onPress('/')}>/</button>

        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <button className="btn btn-info" id="dabutton2" onClick={() => this.unCalc()}>🌈</button><button id="dabutton2" className="btn btn-danger" onClick={() => this.unCalc2()}>⌛</button>
          <br/><br/><br/>
          <div className="foot" style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', fontSize: 15}}><span>made with&nbsp;</span><span><Image src={redheart} alt="redheart" height={23} width={23}/></span><span>&nbsp;in new york</span></div>
        </div>
      )
    }
    else if(this.state.nowPage === "Clock"){
      return(<ClockPage />)
    }
    else if(this.state.nowPage === "App"){
      return(<App />)
    }
  }
}

export default App;
