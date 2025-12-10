// Vongdoi.jsx
import React from 'react'

class Vongdoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      lopList: [
        "22CNTT1A",
        "23CNTT1B", 
        "24CNTT1C",
        "25CNTT2A",
        "26CNTT2B"
      ]
    };
  }
  
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState(prevState => ({
        currentIndex: (prevState.currentIndex + 1) % prevState.lopList.length
      }));
    }, 2000); // Đổi lớp mỗi 2 giây
  } 

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { currentIndex, lopList } = this.state;
    
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Khoa Công Nghệ Thông Tin</h1>
        <h2 style={{ color: 'blue', fontSize: '24px' }}>
          Lớp: {lopList[currentIndex]}
        </h2>
        <p>Lớp hiện tại: {currentIndex + 1}/{lopList.length}</p>
        
      </div>
    );
  }
}

export default Vongdoi;