import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { lat, lng, selectFunction } = this.props;

    selectFunction(lat, lng);
  }

  render() {
    const backgroundUrl = this.props.imgUrl;
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${backgroundUrl})`
    };

    return (
      <div className="card"
        style={style}
        onClick={this.handleClick}
      >

        <div className="card-category">
          {this.props.price}
        </div>

        <div className="card-description">
          <h2>{this.props.description}</h2>
        </div>

        <div className="card-link" href="#" />

      </div>
    );
  }
}

export default Flat;
