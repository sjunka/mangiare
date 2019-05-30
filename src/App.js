import React from 'react';
import './App.css';
import ReactWOW from 'react-wow'

class  App extends React.Component {

  sendMessage = () => {
    window.location.href = "https://wa.me/573005523770?text=Hola%20enviame%20el%20menu%20del%20dia%20por%20favor"
  }

  calculateDelay = () => {

    let seconds = 1
    return `${seconds}s`

  }

  render () {
    return (
      <div className="App">


  <div className=" message-list">
    <div className="message -left">
    <ReactWOW animation='fadeInLeft' delay={this.calculateDelay} scroll duration='0.5s'>
    <div className="nes-balloon from-left">
            <p>ole mano llegó Mangiare!!</p>
    </div>
    </ReactWOW>
    </div>


    <section className="message -right">
    <ReactWOW animation='fadeInRight' delay='1.5s' scroll duration='0.5s'>
      <div className="nes-balloon from-right">
        <p>UY! que es Mangiare?</p>
      </div>
      </ReactWOW>
    </section>


    <div className="message -left">
    <ReactWOW animation='fadeInLeft' delay='2.5s' scroll duration='0.5s'>

      <div className="nes-balloon from-left">
            <p>La mejor Pasta artesanal de la ciudad</p>
      </div>
      </ReactWOW>

    </div>

    <section className="message -right">
    <ReactWOW animation='fadeInRight' delay='3.5s' scroll duration='0.5s'>

      <div className="nes-balloon from-right">
        <p>Spagettis, canelones, raviolis?</p>
      </div>
      </ReactWOW>

    </section>

    <div className="message -left">
    <ReactWOW animation='fadeInLeft' delay='4.5s' scroll duration='0.5s'>

      <div className="nes-balloon from-left">
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
