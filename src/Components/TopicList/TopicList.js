import React, { Component } from "react";
import { Link } from 'react-router-dom';
import posts from "./../../post_data.json";
import "./TopicList.css";

class TopicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    // This is where you would make an axios call to a server in a fullstack application
    // but for today we'll be just be using an array of dummy data
    this.setState({
      posts: posts
    });
  }
  render() {
    const { posts } = this.state;
    let displayTopics = posts.map(post => {
      return <Link to={`/post/${post.id}`}><li key={post.id}>{post.title}</li></Link>;
    });
    return (
      <div className="TopicList">
        <h1>Latest Blog Posts...</h1>
        <ul>{displayTopics}</ul>
      </div>
    );
  }
}

export default TopicList;
