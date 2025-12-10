import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  render() {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Số hiện tại: {this.state.number}</h1>

        <button
          onClick={this.handleClick}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Bấm để tăng
        </button>
      </div>
    );
  }
}

export default Counter;