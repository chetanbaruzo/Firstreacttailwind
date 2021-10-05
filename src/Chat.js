import React from "react";
import { Component } from "react";
import reactDom from "react-dom";
import './Chat.css';

class Chat extends Component {
    constructor(props){
        super(props)
          
        // Set initial state
        this.state = {msg : 'You have a new message!'}
          
        // Binding this keyword
        this.handleClick = this.handleClick.bind(this)
      }
      
      handleClick(){
        
        // Changing state
        this.setState({msg : 'Have a good day!'})
      }

    render() {
        return (
            <div className="mt-20 mb-auto">
            <div className="flex items-center space-x-2 p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md">
              <div className="flex-shrink-0">
                <img className="h-8 w-8 sm:h-10 sm:w-10 md:h-16 md:w-16 xl:h-24 xl:w-24" src="./chat.png" alt="chat logo"/>
            </div>
            <div>
                <div className="text-6xl font-semibold text-black">Let's Chat</div>
                <p className="text-2xl text-gray-500">{this.state.msg}</p>
            </div>
                
              
            </div>
            {/* Set click handler */}
            <button onClick={this.handleClick} className="mt-5 flex mx-auto py-2 px-4 text-xl font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">click me to see message</button>
            </div>
          )
    }
}

export default Chat;