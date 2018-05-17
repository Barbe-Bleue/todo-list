import React, { Component } from 'react';

class Hi extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      userName: '',
    };

    this.displayName = this.displayName.bind(this);
    this.onChange = this.onChange.bind(this);
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

  render() {
    return(
      <div className="component">
        <p>C'est quoi ton petit nom à toi ? </p>
        <form className="form-row">
          <div className="col-7 col-offset-3">
            <input
              type="text"
              className="form-control"
              placeholder="Allez ne soit pas timide..."
              value={this.state.userInput}
              onChange={this.onChange} // Update de l'input
            />
          </div>
          <div className="col-auto">
            <button onClick={this.displayName}
              className="form-control btn btn-primary "
              >Bonsoir
            </button>
          </div>
        </form>
        <h3>
          {this.state.userName}
        </h3>
      </div>
    );
  }
}

export default Hi;
