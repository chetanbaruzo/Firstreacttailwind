import React from "react";
import { Component } from "react";
import axios from "axios";

class AxiosPostRequest extends Component {
    // In React constructors are used to Initializing local state by assigning an object to this.state
    // In constructor for Component subclass, you should call super() before any other statement. Otherwise, this will be undefined in the constructor
  constructor() {
    super();
    //set initial state to null for articleID and articleTitle
    this.state = {
      articleID: null,
      articleTitle: null,
    };
  }

    // componentDidMount() is invoked immediately after a component is mounted
    // You may call setState() immediately in componentDidMount(). It will trigger an extra rendering, but it will happen before the browser updates the screen.
  componentDidMount() {
    const url = "https://reqres.in/api/articles";
    const article = { title: "React post Request using axios" };
    axios.post(url, article).then((response) => {
        console.log(1);
      this.setState({
        articleID: response.data.id,
        articleTitle: response.data.title,
      });
    });
    console.log(2);
  }
  render() {
    // Access data of articleID and articleTitle after setstate execute
    const { articleID } = this.state;
    const { articleTitle } = this.state;
    return (
      <div className="text-center font-bold">
        <h1>Post Request using Axios</h1>
        <h2 className="bg-gray-300">Article ID: {articleID}</h2>
        <h2 className="bg-yellow-300">Article Title(object): {articleTitle}</h2>
      </div>
    );
  }
}

export default AxiosPostRequest;
