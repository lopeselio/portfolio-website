import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
import Link from 'next/link';


class Portfolios extends React.Component {
  static async getInitialProps() {
    let posts = [];
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = response.data;
    }catch(err) {
      console.error(err);
    }
    return{posts :posts.splice(0,10)};
  }
  renderPosts(posts) {
    debugger;
    return posts.map((post) => {
      return (
        <li>
          <Link as={`/portfolio/${post.id}`} href={`/portfolio?title=${post.title}`}>
            <a style={{'fontSize':'20px'}}> {post.title} </a>
          </Link> 
        </li>
      )
    })
  }
  render() {
    debugger;
    const {posts} = this.props;
    debugger;
    console.log(this.props);
    return(
      <BaseLayout>
      <h1> I am Portfolios Page </h1>
      <ul>
        {this.renderPosts(posts)}
      </ul>
      </BaseLayout>
    )
  }
} 

export default Portfolios;