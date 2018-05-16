import React, { Component } from 'react';

class Hi extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      userName: '',
    };
  }

  onChange(event) {
    // Update de la valeur
    this.setState({
      userInput: event.target.value
    }, () => console.log(this.state.userInput));
  }

  displayName(event) {
    // évite le rechargement de page
    event.preventDefault();
    this.setState({
      // renit après ajout d'un nom
      userInput: '',
      // stockage de la variable
      userName: 'Salut à toi '+ this.state.userInput + ' !'
    });
  }

  renderUserName() {
    return this.state.userName;
  }

  render() {
    return(
      <div>
        <p>C'est quoi ton petit nom à toi ? </p>
        <form className="form-row">
          <input
            type="text"
            placeholder="Allez ne soit pas timide..."
            value={this.state.userInput}
            onChange={this.onChange.bind(this)} // Update de l'input
          />
          <button onClick={this.displayName.bind(this)}>
            Bonsoir
          </button>
        </form>
        <h3>
          {this.renderUserName()}
        </h3>
      </div>
    );
  }
}

export default Hi;
