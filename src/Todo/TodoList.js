import React, { Component } from 'react';

class TodoList extends Component {

  // Déclarations des variables de base
  constructor() {
    super();
    this.state = {
      userInput: '',
      items: []
    };
  }

  onChange(event) {
    // Apercu temps réel quand on tape
    console.log(event.target.value);

    // Update de la valeur
    this.setState({
      userInput: event.target.value
    }, () => console.log(this.state.userInput));
  }

  addTodo(event) {
    // Permet de ne pas recharger la page
    event.preventDefault();

    this.setState({
      // renit après ajout d'un item
      userInput: '',
      // On reprend le tableau à l'origine, et ajout du nouvel item
      items: [...this.state.items, this.state.userInput]
    },() => console.log(this.state.items));
  }

  deleteTodo(item) {
    const array = this.state.items;

    // index de l'item de la todo list que l'on veut supprimer
    const index = array.indexOf(item);

    // Supprimer du tableau la todo
    array.splice(index, 1)

    // update du tableau
    this.setState({
      items: array
    });
  }
  renderTodos() {
    // .map = looper sur les items
    // item = un des items (key => value)
    return this.state.items.map((item) => {
      return (
        <li className="list-group-item d-flex justify-content-between align-items-center" key={item}>
          {item}
          <button
            onClick={this.deleteTodo.bind(this, item)}
            className="btn btn-danger"
            >Supprimer
          </button>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <h1 align="center">Ma Todo List</h1>
        <form className="form-row">
          <div className="col-9">
            <input
              className="form-control"
              value={this.state.userInput}
              type="text"
              placeholder="Oui ?"
              onChange={this.onChange.bind(this)} // Update de l'input
            />
          </div>

          <div className="col">
            <button
              onClick={this.addTodo.bind(this)}
              className="btn btn-primary form-control">
              Ajouter
            </button>
          </div>
        </form>
        <ul className="list-group col-5">
          {this.renderTodos()}
        </ul>
      </div>
    );
  }
}

export default TodoList;
