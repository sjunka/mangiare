import React from 'react';
import './App.css';
import ReactWOW from 'react-wow'
import soundfile from './js/audio/News.mp3'
import soundfile2 from './js/audio/Bing.mp3'
let audio = new Audio(soundfile);
let audio2 = new Audio(soundfile2);

class  App extends React.Component {

  state = {
    balloon1: false,
    balloon2: false,
    balloon3: false,
    balloon4: false,
    balloon5: false,
 }

  sendMessage = () => {
    window.location.href = "https://wa.me/573005523770?text=Hola%20enviame%20el%20menu%20del%20dia%20por%20favor"
  }
  playAudio = () => {

    audio.play()
  }
  playAudio2 = () => {

    audio2.play()
  }

  calculateDelay = () => {
    let seconds = 1
    return `${seconds}s`
  }

  hideBalloon = () => {
    this.setState({balloon1: !this.state.balloon1})

   this.playAudio2()

  }
  hideBalloon2 = () => {
    this.setState({balloon2: !this.state.balloon2})
    this.playAudio2()
  }
  hideBalloon3 = () => {
    this.setState({balloon3: !this.state.balloon3})
    this.playAudio2()
  }
  hideBalloon4 = () => {
    this.setState({balloon4: !this.state.balloon4})
    this.playAudio2()
  }
  hideBalloon5 = () => {

      this.setState({balloon5: !this.state.balloon5})
      this.playAudio()



  }
  render () {
    let hidebaloon1 = this.state.balloon1 ? "hide" : "nes-balloon from-left";
    let hidebaloon2 = this.state.balloon2 ? "hide" : "nes-balloon from-right";
    let hidebaloon3 = this.state.balloon3 ? "hide" : "nes-balloon from-left";
    let hidebaloon4 = this.state.balloon4 ? "hide" : "nes-balloon from-right";
    let hidebaloon5 = this.state.balloon5 ? "hide" : "nes-balloon from-left";

    return (
      <div className="App">


  <div className=" message-list">
    <div className="message -left">
    <ReactWOW animation='fadeInLeft' delay={this.calculateDelay} scroll duration='0.5s'>
    <div onClick={this.hideBalloon} className={hidebaloon1}>
            <p >ole mano llegó Mangiare!!</p>
    </div>
    </ReactWOW>
    </div>


    <section className="message -right">
    <ReactWOW animation='fadeInRight' delay='1.5s' scroll duration='0.5s'>
      <div onClick={this.hideBalloon2} className={hidebaloon2} >
        <p>UY! que es Mangiare?</p>
      </div>
      </ReactWOW>
    </section>


    <div className="message -left">
    <ReactWOW animation='fadeInLeft' delay='2.5s' scroll duration='0.5s'>

      <div onClick={this.hideBalloon3} className={hidebaloon3} >
            <p>La mejor Pasta artesanal de la ciudad</p>
      </div>
      </ReactWOW>

    </div>

    <section className="message -right">
    <ReactWOW animation='fadeInRight' delay='3.5s' scroll duration='0.5s'>

      <div onClick={this.hideBalloon4} className={hidebaloon4} >
        <p>Spagettis, canelones, raviolis?</p>
      </div>
      </ReactWOW>

    </section>

    <div className="message -left">
    <ReactWOW animation='fadeInLeft' delay='4.5s' scroll duration='0.5s'>

      <div onClick={this.hideBalloon5} className={hidebaloon5}>
            <p>Si y mucho más!</p>
      </div>
      </ReactWOW>

    </div>

  </div>

  <div className="nes-container  is-centered">
    <p className="title" >Pasta artesanal a domicilio</p>


    <div style={{marginTop: '2rem'}}className="is-centered animated bounce slow infinite">


    <button onClick={this.sendMessage}type="button" className="nes-btn is-primary ">Menu</button>
    </div>
  </div>

  </div>
    );
  }

}

export default App;
