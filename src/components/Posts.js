import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchPost } from "../actions/postsAction"
import { createPost } from "../actions/postsAction"
import { withRouter } from "react-router-dom"

import { useHistory } from "react-router-dom"
// import PropTypes from "prop-types"

export class Posts extends Component {
  // constructor(props) {
  //   super()
  //   this.state = {
  //     posts: [],
  //   }
  // }
  //  same as cdm where render and cdm works parallely to show content on screen componentWillMount()
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => this.setState({ posts: data }))
    // debugger
    this.props.fetchPost()
    // this.props.createPost()
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps, "next props")

    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }
  // routeChange = () => {
  //   let path = "/about"
  //   this.props.history.push(path)
  // }
  render() {
    // const posts = this.state.posts
    // console.log(posts)
    console.log(this.props.newPost)
    const postItems =
      this.props.posts &&
      this.props.posts.map((post) => {
        return (
          <>
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            {/* <button type="button" onClick={this.routeChange}>
              Go back
            </button> */}
          </>
        )
      })

    return (
      <>
        <h1>Posts</h1>
        {postItems}
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
})
export default connect(mapStateToProps, { fetchPost })(Posts)
