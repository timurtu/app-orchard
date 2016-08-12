/**
 * Created by timur on 8/11/16.
 */

import React from 'react'

export default class DialogTest extends React.Component {
  state = {
    active: false
  };
  
  _handleToggle = () => {
    this.setState({ active: !this.state.active });
  }
  
  actions = [
    { label: "Cancel", onClick: this._handleToggle },
    { label: "Save", onClick: this._handleToggle }
  ];
  
  render() {
    return (
      <div>
        <button
          className="btn btn-info bg-inverse"
          onClick={this._handleToggle}>
          Show my dialog
        </button>
        <div
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this._handleToggle}
          onOverlayClick={this._handleToggle}
          title='My awesome dialog'
        ></div>
        <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
      </div>
    );
  }
}
