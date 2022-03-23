import React, { Component } from 'react';

class Flat extends Component {
  shouldComponentUpdate(nextProps) {
    const { active } = this.props;
    return nextProps.active !== active;
  }

  handleClick = () => {
    const { lat, lng, imgUrl } = this.props;
    const { selectFunction, setActiveFunction } = this.props;

    selectFunction(lat, lng);
    setActiveFunction(imgUrl);
  }

  render() {
    const { imgUrl, price, description } = this.props;
    const { active } = this.props;
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${imgUrl})`
    };

    return (
      <div
        className={`card${active}`}
        style={style}
        onClick={this.handleClick}
      >

        <div className="card-category">
          {price}
        </div>

        <div className="card-description">
          <h2>{description}</h2>
        </div>

        <div className="card-link" href="#" />

      </div>
    );
  }
}

export default Flat;
