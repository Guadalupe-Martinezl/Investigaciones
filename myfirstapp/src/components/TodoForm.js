import React, { Component } from 'react';

class TodoForm extends Component {
  constructor (props) {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
sa


  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
       title: '',
       responsible: '',
       description: '',
       priority: 'low'
    });
  }

  handleInputChange(e) {
    this.props.onUpdateTodo(this.state);
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    // console.log ("state del TodoForm --------------------->", this.state);
    console.log ("prop del TodoForm----------------------->", this.props);

    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input type="hidden" id="index" name="index"
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              value={this.state.titleUpdate}
              onChange={this.handleInputChange}
              placeholder="Title"
              />
          </div>
          <div className="form-group">
            <input type="hidden" id="index" name="index" value={this.state.responsibleUpdate}
              type="text"
              name="responsible"
              className="form-control"
              value={this.state.responsible}
              onChange={this.handleInputChange}
              placeholder="Responsible"
              />
          </div>
          <div className="form-group">
            <input type="hidden" id="index" name="index" value={this.state.descriptionUpdate}
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Description"
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                value={this.state.priority}
                onChange={this.handleInputChange}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>

        </form>
      </div>
    )
  }

}

export default TodoForm;
