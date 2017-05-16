import React, {Component} from 'react'

class Image extends Component {
  constructor(props) {
    super(props);
    this.currentEl = null;
  }

  componentWillUpdate() {
    this.currentEl.classList.add('disappear');
  }

  componentDidUpdate() {
    this.currentEl.addEventListener('animationend', (el) => el.target.classList.remove('disappear'))
  }

  render() {
    return (
      <figure className='image-container' style={{
        background: `#333 url(${this.props.source.url}) no-repeat center center`
      }} ref={(el) => this.currentEl = el}>
        <button className='rating' onClick={(e) => this.props.changeRatingUp(e, this.props.source)} onContextMenu={(e) => this.props.changeRatingDown(e, this.props.source)}>
          {this.props.source.rating}
        </button>
      </figure>
    )
  }
}

export default Image;
