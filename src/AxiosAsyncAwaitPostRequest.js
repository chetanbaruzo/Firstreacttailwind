import React from "react";
import { Component } from "react";
import axios from "axios";

class AxiosAsyncAwaitPostrequest extends Component {
  constructor() {
    super();
    this.state = { articleID: null, articleTitle: null };
  }

  async componentDidMount() {
    const url = "https://reqres.in/api/articles";
    const article = "React POST request using Async Await";
    console.log(1);
    const response = await axios.post(url, article);
    this.setState({
      articleID: response.data.id,
      articleTitle: response.config.data,
    });
    console.log(2);
  }
  render() {
    const { articleID } = this.state;
    const { articleTitle } = this.state;
    return (
      <div className="text-center font-bold">
        <h1>POST Request using Async/Await</h1>
        <h2 className="bg-blue-300">Article ID: {articleID}</h2>
        <h2 className="bg-pink-300">Article Title(string): {articleTitle}</h2>
      </div>
    );
  }
}

export default AxiosAsyncAwaitPostrequest;
