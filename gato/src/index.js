import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Game extends React.Component {
  constructor() {
    super();
    this.state = {
        num1: '' ,
        num2: '',
        num3: '',
        result: '',
        result2:'',
        result3:''

      }
        this.handleComparativa = this.handleComparativa.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

}
handleComparativa(num1, num2, num3 ){
  this.setState({})
    var result= (num1>num3) ? num1 : num3;
      var  result2 = (num2>num3) ? num2 : num3;
      return
      var result3 = (result<result2) ? result : result2;
  }

        //console.log("el numero de en medio es--->",result3);

        handleSubmit(e) {
   e.preventDefault();
   // this.props.onAddTodo(this.state);
   this.setState({
     num1: this.state.num1 ,
     num2: this.state.num2,
     num3: this.state.num3,
     result: this.state.result,
     result2:this.state.result2,
     result3:this.state.result3
   });
 }


          handleInputChange(e) {
            const {value, name} = e.target;
            // console.log(value, name);
            this.setState({
              [name]: value
            });
        }
  render() {

    return (
      <div>
      <form onSubmit={this.handleSubmit}>

      <h5> Primer valor </h5>
      <input
        type="text"
        name="num1"
        value={this.state.num1}
        onChange={this.handleInputChange}
        placeholder="Ingrese un numero"
      />

      <h5> Segundo valor </h5>
      <input
        type="text"
        name="num2"
        value={this.state.num2}
        onChange={this.handleInputChange}
        placeholder="Ingrese un numero"
      />

      <h5> Tercer valor </h5>
      <input
        type="text"
        name="num3"
        value={this.state.num3}
        onChange={this.handleInputChange}
        placeholder="Ingrese un numero"
      />

      <button
      type = "submit"
      className="btn btn-success"> Comparar </button>

      <h5> Resultado </h5>
      <input type="text" name="result3" value={this.setState.result3} />
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
