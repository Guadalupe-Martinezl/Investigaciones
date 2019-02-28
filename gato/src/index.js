import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled, {css}from 'styled-components'


class Game extends React.Component {
  constructor() {
    super();
    this.state = {
        num1: '' ,
        num2: '',
        num3: ''
      }
        this.handleComparativa = this.handleComparativa.bind(this);
}
handleComparativa(num1, num2, num3 ){

        result= (num1>num3) ? num1 : num3;
        result2 = (num2>num3) ? num2 : num3;
      return  result3 = (result<result2) ? result : result2;
  }

        //console.log("el numero de en medio es--->",result3);


  render() {

    return (
      <div>
      <form>

      <h5> Primer valor </h5>
      <input type="text" name="num1"  />

      <h5> Segundo valor </h5>
      <input type="text" name="num2"  />

      <h5> Tercer valor </h5>
      <input type="text" name="num3"  />

      <button onClick=handleComparativa> Comparar </button>

      <h5> Resultado </h5>
      <input type="text" name="result3" />
      </form>

      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
