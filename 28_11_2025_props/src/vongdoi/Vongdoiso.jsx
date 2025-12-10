// Vongdoi.jsx
import React from 'react'

class Vongdoiso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }, 1000);
  } 

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { count } = this.state;
    
    return (
      <h2 style={{ 
        color: 'blue', 
        fontSize: '48px',
        textAlign: 'center',
        padding: '50px'
      }}>
        {count}
      </h2>
    );
  }
}

export default Vongdoiso;