import React from 'react';
import './App.css';

class  App extends React.Component {

  sendMessage = () => {
    console.log('test')

    window.location.href = "https://wa.me/573005523770?text=Hola%20enviame%20el%20menu%20del%20dia%20por%20favor"
  }

  render () {
    return (
      <div className="App">


  <div className=" message-list">
    <div className="message -left">
      <div className="nes-balloon from-left">
            <p>mano llegó Mangiare!!</p>
      </div>
    </div>


    <section className="message -right">
      <div className="nes-balloon from-right">
        <p>UY! que es Mangiare?</p>
      </div>
    </section>


    <div className="message -left">
      <div className="nes-balloon from-left">
            <p>La mejor Pasta artesanal de la ciudad</p>
      </div>
    </div>

    <section className="message -right">
      <div className="nes-balloon from-right">
        <p>Spagettis, canelones, raviolis?</p>
      </div>
    </section>

    <div className="message -left">
      <div className="nes-balloon from-left">
            <p>Si y mucho más!</p>
      </div>
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
