import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Image from '../image/Image';
import AddImage from '../addimage/AddImage';

import IMAGE_ARR from '../../data/imageslink';
import { buildSource, sorter } from '../utils'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: buildSource(IMAGE_ARR)
    }
    this.changeRatingUp = this.changeRatingUp.bind(this);
    this.changeRatingDown = this.changeRatingDown.bind(this);
    this.addImage = this.addImage.bind(this);
  }

  changeRatingUp(e, image) {
    this.state.source.find((el) => el == image).rating += 1;
    this.setState({
      source: sorter(this.state.source)
    })
  }

  changeRatingDown(e, image) {
    e.preventDefault();
    this.state.source.find((el) => el == image).rating -= 1;
    this.setState({
      source: sorter(this.state.source)
    })
  }

  addImage(imageUrl) {
    if(!imageUrl) return
    this.state.source.push({rating: 0, url: imageUrl})
    this.setState({
      source: sorter(this.state.source)
    })
  }

  render() {
    return (
      <div className='images-list'>
        <div className='images-list-galery'>
          {this.state.source.map((val, i) => {
            return <Image source={val} key={i} changeRatingUp={this.changeRatingUp} changeRatingDown={this.changeRatingDown}/>
          })}
          <AddImage addImage={this.addImage}/>
        </div>
      </div>
    )
  }
}

export default List;
