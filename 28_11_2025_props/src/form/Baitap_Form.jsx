import React from "react";
class Baitap_Form extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            username:"",

        };
    }
    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }
        render(){
            return (
                <form align= "center">
                    <p>Nhập Tên:</p>
                    <input
                    type= 'text'
                    name='username'
                    onChange= {this.myChangeHandler}
                    />
                      <h1>XIN CHÀO {this.state.username} </h1>
                </form>
                                                      
                
            );
        }
    }
    export default Baitap_Form;