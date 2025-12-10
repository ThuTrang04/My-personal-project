import React from "react";

class VongdoiIMG extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current:0,
            listIMG:[
                '/img/css-3-svgrepo-com.svg',
                '/img/html-5-svgrepo-com.svg',
                '/img/js-svgrepo-com.svg',
                '/img/linux-svgrepo-com.svg',
                '/img/window-svgrepo-com.svg',
            ]
        };
    }

    componentDidMount() {
        this.TimeID = setInterval(() => {
            this.setState(prev => ({
                current: (prev.current+1) % prev.listIMG.length
            }))
        },2000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const { current, listIMG } = this.state;
        const currentImage = listIMG[current];
        
        return (
        <div style={{ textAlign: 'center', padding: '30px' }}>
            <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            backgroundColor: 'white',
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
            <img 
                src={currentImage} 
                style={{
                width: '100%',
                height: '450px',
                objectFit: 'cover'
                }}
            />
            </div>
        </div>
        );
    }
    }

export default VongdoiIMG;
