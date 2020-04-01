import React from 'react';
import './App.css';
import TodoList from './TodoList'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.re_renderBack = this.re_renderBack.bind(this);
  }

  re_renderBack = () => {
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        {/* {console.log(this.state)} */}
        <TodoList items={this.state.items} re_renderBack={this.re_renderBack}/>
        <form onClick={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    // console.log(e.target.value);
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      pressed: false
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

export default TodoApp;
