import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled, {css}from 'styled-components'

class Game extends React.Component {
  constructor(props) {
    super(props);
    var letra = 'C';
    var abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q',
     'R','S','T','U','V','W','X','Y','Z'];

    // console.log(abecedario[3]);

     abecedario.forEach(function(element, index) {
       //console.log(element);

       if(letra == element){
         console.log(abecedario[index+1]);
       }else{
         (abecedario>26)
         console.log(abecedario[0]);
       }

         //console.log(element);
        // console.log(index+1):


     });

   }




  render() {

    return (
      <div>

      </div>
    );
  }
}



// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
