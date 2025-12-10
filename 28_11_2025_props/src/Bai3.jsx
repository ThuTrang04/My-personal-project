import React from 'react';
import './Chuyenanh.css';

class Chuyenanh extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0
    };

    this.images = [
        '/img/me1.jpg',
        '/img/chonchon1.jpg',
        '/img/me3.jpg',
        

    ];
  }

  nextImage = () => {
    this.setState(prevState => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % this.images.length
    }));
  };

  prevImage = () => {
    this.setState(prevState => ({
      currentImageIndex: prevState.currentImageIndex === 0 
        ? this.images.length - 1 
        : prevState.currentImageIndex - 1
    }));
  };

  render() {
    const { currentImageIndex } = this.state;

    return (
      <div className="image-slider">
        <h2>Trình xem ảnh</h2>
        
        <div className="image-container">
          <img 
            src={this.images[currentImageIndex]} 
            alt={`Slide ${currentImageIndex + 1}`}
            className="slider-image"
          />
        </div>

        <div className="slider-info">
          Ảnh {currentImageIndex + 1} / {this.images.length}
        </div>

        <div className="slider-controls">
          <button onClick={this.prevImage} className="slider-btn prev-btn">
            Ảnh trước
          </button>
          <button onClick={this.nextImage} className="slider-btn next-btn">
            Ảnh sau
          </button>
        </div>
      </div>
    );
  }
}

export default Chuyenanh;