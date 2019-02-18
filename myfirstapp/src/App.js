import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// data
import { todos } from './todos.json';

// subcomponents
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos,
      indexUpdate:'',
      titleUpdate: '',
      responsibleUpdate: '',
      descriptionUpdate: '',
      priorityUpdate:''
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleEditTodo = this.handleEditTodo.bind(this);
    this.handleInputChangeUpdate =this.handleInputChangeUpdate.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleEditTodo(index)
  {
    this.setState({
      indexUpdate: index,
      titleUpdate: this.state.todos[index].title,
      responsibleUpdate: this.state.todos[index].responsible,
      descriptionUpdate: this.state.todos[index].description,
      priorityUpdate: this.state.todos[index].priority
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  handleInputChangeUpdate(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }



  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.responsible}</p>
              {todo.description}
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
                </div>
              <div className="card-footer">
              <button
                className="btn btn-dark"
                onClick={this.handleEditTodo.bind(this, i)}>
                Edit
              </button>
            </div>
          </div>
        </div>
      )
    });


    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <TodoForm
                onAddTodo={this.handleAddTodo}
                onUpdateTodo={this.handleEditTodo}
                ChangeUpdate={this.handleInputChangeUpdate}
                indexUpdate={this.state.indexUpdate}
                titleUpdate={this.state.titleUpdate}
                descriptionUpdate={this.state.descriptionUpdate}
                responsibleUpdate={this.state.responsibleUpdate}
                priorityUpdate={this.state.priorityUpdate}
              />
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// establecer los valores ocultos en el formulario
